import { afterEach, describe, expect, it } from "vitest";
import { setupStaticEnhancements } from "@/lib/enhance";

let cleanup: (() => void) | undefined;

afterEach(() => {
  cleanup?.();
  cleanup = undefined;
  document.body.innerHTML = "";
});

describe("static production enhancements", () => {
  it("opens and closes the mobile menu with accurate state and keyboard focus", () => {
    document.body.innerHTML = `
      <button
        data-menu-toggle
        aria-controls="mobile-navigation"
        aria-expanded="false"
        aria-label="Otwórz menu"
      ></button>
      <div id="mobile-navigation" hidden></div>
    `;

    cleanup = setupStaticEnhancements();

    const button = document.querySelector<HTMLButtonElement>("[data-menu-toggle]")!;
    const navigation = document.getElementById("mobile-navigation")!;

    button.click();
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(button).toHaveAccessibleName("Zamknij menu");
    expect(navigation).not.toHaveAttribute("hidden");

    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveAccessibleName("Otwórz menu");
    expect(navigation).toHaveAttribute("hidden");
    expect(button).toHaveFocus();
  });
});
