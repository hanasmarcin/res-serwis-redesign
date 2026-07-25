import ScrollLink from "@/components/ScrollLink";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} RES-SERWIS. Wszelkie prawa zastrzeżone.</p>
        <div className="flex items-center gap-6">
          <ScrollLink href="#home" className="hover:text-foreground transition-colors">Strona główna</ScrollLink>
          <ScrollLink href="#about" className="hover:text-foreground transition-colors">O firmie</ScrollLink>
          <ScrollLink href="#services" className="hover:text-foreground transition-colors">Oferta</ScrollLink>
          <ScrollLink href="#projects" className="hover:text-foreground transition-colors">Realizacje</ScrollLink>
          <ScrollLink href="#contact" className="hover:text-foreground transition-colors">Kontakt</ScrollLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
