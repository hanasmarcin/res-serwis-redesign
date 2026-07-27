import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";
import ScrollLink from "@/components/ScrollLink";

const navLinks = [
  { label: "Strona główna", href: "#home" },
  { label: "O firmie", href: "#about" },
  { label: "Oferta", href: "#services" },
  { label: "Realizacje", href: "#projects" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setOpen(false);
      menuButtonRef.current?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <nav
      aria-label="Główna nawigacja"
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-card/95 shadow-sm backdrop-blur-lg before:pointer-events-none before:absolute before:inset-x-0 before:bottom-full before:h-[100vh] before:bg-card before:content-['']"
    >
      <div data-site-header-offset className="container flex items-center justify-between h-16 md:h-20">
        <ScrollLink
          href="#home"
          className="flex shrink-0 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <img
            src={logo}
            alt="RES-SERWIS"
            className="h-10 w-auto shrink-0 md:h-12"
            width={204}
            height={75}
          />
          <div className="hidden lg:block shrink-0">
            <p className="font-heading text-xl font-bold text-foreground leading-none tracking-[0.06em] whitespace-nowrap">
              RES-SERWIS
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground whitespace-nowrap">
              Odnawialne Źródła Energii
            </p>
          </div>
        </ScrollLink>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {link.label}
            </ScrollLink>
          ))}
          <a
            href="tel:+48502328185"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            502 328 185
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          ref={menuButtonRef}
          data-menu-toggle
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <Menu className="menu-icon-open h-6 w-6" aria-hidden="true" />
          <X className="menu-icon-close h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile menu */}
        <div
          id="mobile-navigation"
          hidden={!open}
          className="border-b border-border bg-card pb-4 md:hidden"
        >
          {navLinks.map((link) => (
            <ScrollLink
              key={link.href}
              href={link.href}
              onNavigate={() => setOpen(false)}
              className="flex min-h-12 items-center px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
            >
              {link.label}
            </ScrollLink>
          ))}
          <div className="px-6 pt-2">
            <a
              href="tel:+48502328185"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              502 328 185
            </a>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
