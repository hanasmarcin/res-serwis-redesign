import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div data-site-header-offset className="container flex items-center justify-between h-16 md:h-20">
        <ScrollLink href="#home" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="RES-SERWIS" className="h-10 md:h-12 w-auto shrink-0" />
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
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </ScrollLink>
          ))}
          <Button asChild size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="tel:+48502328185">
              <Phone className="w-4 h-4" />
              502 328 185
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-foreground"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-navigation" className="md:hidden bg-card border-b border-border pb-4">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.href}
              href={link.href}
              onNavigate={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </ScrollLink>
          ))}
          <div className="px-6 pt-2">
            <Button asChild size="sm" className="w-full gap-2 bg-primary text-primary-foreground">
              <a href="tel:+48502328185">
                <Phone className="w-4 h-4" />
                502 328 185
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
