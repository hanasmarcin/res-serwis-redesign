const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} RES-SERWIS. Wszelkie prawa zastrzeżone.</p>
        <div className="flex items-center gap-6">
          <a href="#home" className="hover:text-foreground transition-colors">Strona główna</a>
          <a href="#about" className="hover:text-foreground transition-colors">O firmie</a>
          <a href="#services" className="hover:text-foreground transition-colors">Oferta</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Kontakt</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
