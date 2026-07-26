import { beforeEach, describe, expect, it, vi } from "vitest";
import { scrollToHash } from "@/lib/scroll";

describe("scrollToHash", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <header data-site-header-offset></header>
      <section id="target" tabindex="-1"></section>
    `;

    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 100,
    });
    vi.spyOn(window, "scrollTo").mockImplementation(() => undefined);
    vi.spyOn(window.history, "pushState");
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      callback(performance.now() + 1_000);
      return 1;
    });

    const header = document.querySelector<HTMLElement>("[data-site-header-offset]")!;
    const target = document.getElementById("target")!;

    vi.spyOn(header, "getBoundingClientRect").mockReturnValue({
      bottom: 80,
      height: 80,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });
    vi.spyOn(target, "getBoundingClientRect").mockReturnValue({
      bottom: 600,
      height: 200,
      left: 0,
      right: 300,
      top: 500,
      width: 300,
      x: 0,
      y: 500,
      toJSON: () => ({}),
    });
  });

  it("updates history, applies the fixed-header offset, and focuses the target", () => {
    expect(scrollToHash("#target")).toBe(true);
    expect(window.history.pushState).toHaveBeenCalledWith(window.history.state, "", "#target");
    expect(window.scrollTo).toHaveBeenLastCalledWith({ top: 508 });
    expect(document.activeElement).toBe(document.getElementById("target"));
  });

  it("rejects missing or non-hash destinations", () => {
    expect(scrollToHash("/target")).toBe(false);
    expect(scrollToHash("#missing")).toBe(false);
  });
});
