import { ArrowDown } from "lucide-react";
import heroAvif640 from "@/assets/generated/hero-roof-service-640.avif";
import heroAvif960 from "@/assets/generated/hero-roof-service-960.avif";
import heroAvif1280 from "@/assets/generated/hero-roof-service-1280.avif";
import heroAvif1600 from "@/assets/generated/hero-roof-service-1600.avif";
import heroWebp640 from "@/assets/generated/hero-roof-service-640.webp";
import heroWebp960 from "@/assets/generated/hero-roof-service-960.webp";
import heroWebp1280 from "@/assets/generated/hero-roof-service-1280.webp";
import heroWebp1600 from "@/assets/generated/hero-roof-service-1600.webp";
import ScrollLink from "@/components/ScrollLink";

const HeroSection = () => {
  return (
    <section
      id="home"
      tabIndex={-1}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <picture className="block h-full w-full">
          <source
            type="image/avif"
            srcSet={`${heroAvif640} 640w, ${heroAvif960} 960w, ${heroAvif1280} 1280w, ${heroAvif1600} 1600w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`${heroWebp640} 640w, ${heroWebp960} 960w, ${heroWebp1280} 1280w, ${heroWebp1600} 1600w`}
            sizes="100vw"
          />
          <img
            src={heroWebp1600}
            alt="Serwisant RES-SERWIS podczas pracy przy kolektorach słonecznych"
            className="hero-service-image h-full w-full object-cover"
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      <div className="container relative z-10 grid px-4 text-center text-white md:grid-cols-[0.85fr_1.15fr] md:text-left">
        <div className="md:col-start-2">
          <p className="font-body text-sm md:text-base font-medium uppercase tracking-[0.18em] text-white/80 mb-5">
            RES-SERWIS ODNAWIALNE ŹRÓDŁA ENERGII
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Doświadczony <span className="text-primary-on-dark">serwis OZE</span>
          </h1>
          <p className="font-body text-lg md:text-xl max-w-3xl mx-auto md:mx-0 mb-6 leading-relaxed text-white/85">
            Serwisujemy pompy ciepła, kolektory słoneczne, instalacje fotowoltaiczne oraz urządzenia
            na biomasę. Zapewniamy także doradztwo techniczne, nadzór i pierwsze uruchomienia instalacji.
          </p>
          <p className="font-body text-sm md:text-base uppercase tracking-[0.18em] max-w-3xl mx-auto md:mx-0 mb-10 text-white/72">
            OLSZTYN I OKOLICE • SERWIS, DORADZTWO, NADZÓR, URUCHOMIENIA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <ScrollLink
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              Skontaktuj się
            </ScrollLink>
            <ScrollLink
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-white/15 px-8 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              Nasza oferta
            </ScrollLink>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 motion-safe:animate-bounce md:bottom-8">
        <ScrollLink
          href="#about"
          aria-label="Przejdź do sekcji O firmie"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ArrowDown className="h-6 w-6" aria-hidden="true" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default HeroSection;
