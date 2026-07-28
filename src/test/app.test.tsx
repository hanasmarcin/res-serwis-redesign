import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("homepage", () => {
  it("exposes a clear semantic structure and accurate contact actions", () => {
    render(<App />);

    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Doświadczony serwis OZE",
    );
    expect(screen.getByRole("navigation", { name: "Główna nawigacja" })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Nawigacja w stopce" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /zadzwoń pod numer/i })).toHaveAttribute(
      "href",
      "tel:+48502328185",
    );
    expect(screen.getByRole("link", { name: /napisz wiadomość na info@res-serwis\.pl/i })).toHaveAttribute(
      "href",
      "mailto:info@res-serwis.pl",
    );
    expect(screen.queryByRole("link", { name: /telefon stacjonarny/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "www.res-serwis.pl" })).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /otwórz adres ul\. Bydgoska 3B, 10-243 Olsztyn, Polska/i,
      }),
    ).toHaveAttribute(
      "href",
      "https://www.google.com/maps/search/?api=1&query=ul.+Bydgoska+3B%2C+10-243+Olsztyn%2C+Polska",
    );
    expect(document.querySelectorAll("a[data-contact-card]")).toHaveLength(3);
  });

  it("supports an accessible mobile-menu disclosure", async () => {
    const user = userEvent.setup();
    render(<App />);

    const navigation = screen.getByRole("navigation", { name: "Główna nawigacja" });
    const menuButton = within(navigation).getByRole("button", { name: "Otwórz menu" });

    await user.click(menuButton);
    expect(menuButton).toHaveAccessibleName("Zamknij menu");
    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    const mobileNavigation = document.getElementById("mobile-navigation");
    expect(mobileNavigation).not.toBeNull();
    expect(
      within(mobileNavigation as HTMLElement).getByRole("link", { name: "Oferta" }),
    ).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(menuButton).toHaveAccessibleName("Otwórz menu");
    expect(menuButton).toHaveFocus();
  });
});
