import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/work/hero-roof-service.jpg";
import ScrollLink from "@/components/ScrollLink";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Serwisant RES-SERWIS podczas pracy przy kolektorach słonecznych"
          className="hero-service-image h-full w-full object-cover"
          width={1600}
          height={900}
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      <div className="container relative z-10 grid px-4 text-center text-white md:grid-cols-[0.85fr_1.15fr] md:text-left">
        <motion.div
          className="md:col-start-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-body text-sm md:text-base font-medium uppercase tracking-[0.18em] text-white/80 mb-5">
            RES-SERWIS ODNAWIALNE ŹRÓDŁA ENERGII
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Doświadczony <span className="text-primary">serwis OZE</span>
          </h1>
          <p className="font-body text-lg md:text-xl max-w-3xl mx-auto md:mx-0 mb-6 leading-relaxed text-white/85">
            Serwisujemy pompy ciepła, kolektory słoneczne, instalacje fotowoltaiczne oraz urządzenia
            na biomasę. Zapewniamy także doradztwo techniczne, nadzór i pierwsze uruchomienia instalacji.
          </p>
          <p className="font-body text-sm md:text-base uppercase tracking-[0.18em] max-w-3xl mx-auto md:mx-0 mb-10 text-white/72">
            OLSZTYN I OKOLICE • SERWIS, DORADZTWO, NADZÓR, URUCHOMIENIA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              <ScrollLink href="#contact">
                Skontaktuj się
              </ScrollLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm text-base px-8 font-semibold">
              <ScrollLink href="#services">
                Nasza oferta
              </ScrollLink>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/55 transition-colors hover:text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ScrollLink href="#about" aria-label="Przejdź do sekcji O firmie">
          <ArrowDown className="w-6 h-6" />
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default HeroSection;
