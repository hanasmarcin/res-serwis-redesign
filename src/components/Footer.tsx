import ScrollLink from "@/components/ScrollLink";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} RES-SERWIS. Wszelkie prawa zastrzeżone.</p>
        <nav aria-label="Nawigacja w stopce">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
            <ScrollLink href="#home" className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors">Strona główna</ScrollLink>
            <ScrollLink href="#about" className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors">O firmie</ScrollLink>
            <ScrollLink href="#services" className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors">Oferta</ScrollLink>
            <ScrollLink href="#projects" className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors">Realizacje</ScrollLink>
            <ScrollLink href="#contact" className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors">Kontakt</ScrollLink>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
