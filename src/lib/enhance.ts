import { scrollToHash } from "@/lib/scroll";

const isModifiedClick = (event: MouseEvent) =>
  event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;

export const setupStaticEnhancements = () => {
  const menuButton = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const mobileNavigation = document.getElementById("mobile-navigation");

  const setMenuOpen = (open: boolean) => {
    if (!menuButton || !mobileNavigation) {
      return;
    }

    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
    mobileNavigation.hidden = !open;
  };

  const handleMenuToggle = () => {
    setMenuOpen(menuButton?.getAttribute("aria-expanded") !== "true");
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key !== "Escape" || menuButton?.getAttribute("aria-expanded") !== "true") {
      return;
    }

    setMenuOpen(false);
    menuButton.focus();
  };

  const handleHashLink = (event: MouseEvent) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      isModifiedClick(event)
    ) {
      return;
    }

    const target = event.target;
    const link =
      target instanceof Element ? target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
    const hash = link?.getAttribute("href");

    if (!link || !hash || link.target === "_blank") {
      return;
    }

    event.preventDefault();

    if (link.closest("#mobile-navigation")) {
      setMenuOpen(false);
    }

    requestAnimationFrame(() => {
      scrollToHash(hash);
    });
  };

  const syncHashScroll = () => {
    const hash = window.location.hash || "#home";

    requestAnimationFrame(() => {
      scrollToHash(hash, { updateHistory: false });
    });
  };

  menuButton?.addEventListener("click", handleMenuToggle);
  document.addEventListener("click", handleHashLink);
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("hashchange", syncHashScroll);
  window.addEventListener("popstate", syncHashScroll);

  if (window.location.hash) {
    syncHashScroll();
  }

  return () => {
    menuButton?.removeEventListener("click", handleMenuToggle);
    document.removeEventListener("click", handleHashLink);
    window.removeEventListener("keydown", handleKeydown);
    window.removeEventListener("hashchange", syncHashScroll);
    window.removeEventListener("popstate", syncHashScroll);
  };
};
