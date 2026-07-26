import technicianAvif360 from "@/assets/generated/technician-service-360.avif";
import technicianAvif720 from "@/assets/generated/technician-service-720.avif";
import technicianWebp360 from "@/assets/generated/technician-service-360.webp";
import technicianWebp720 from "@/assets/generated/technician-service-720.webp";

const AboutSection = () => {
  return (
    <section id="about" tabIndex={-1} className="scroll-mt-24 bg-background py-20 md:scroll-mt-28 md:py-32">
      <div className="container px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Text */}
          <div>
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              O firmie
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Praktyczne doświadczenie w obszarze OZE
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Renewable Energy Systems, w skrócie RES, oznacza systemy wykorzystujące odnawialne źródła
              energii. Impulsem do powstania firmy było rosnące zainteresowanie klientów poszukujących
              tańszych i ekologicznych rozwiązań przygotowania ciepłej wody, ogrzewania oraz chłodzenia
              budynków.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Wieloletnie doświadczenie praktyczne, kompetentni pracownicy oraz stały kontakt z ośrodkami
              naukowymi i czołowymi producentami urządzeń pozwalają nam oferować nowoczesne rozwiązania
              techniczne o wysokiej jakości, dużej sprawności i realnej wartości użytkowej.
            </p>
          </div>

          {/* Team image */}
          <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-xl border border-border bg-card shadow-lg lg:mx-0">
            <picture>
              <source
                type="image/avif"
                srcSet={`${technicianAvif360} 360w, ${technicianAvif720} 720w`}
                sizes="(min-width: 1024px) 300px, min(300px, 100vw - 2rem)"
              />
              <source
                type="image/webp"
                srcSet={`${technicianWebp360} 360w, ${technicianWebp720} 720w`}
                sizes="(min-width: 1024px) 300px, min(300px, 100vw - 2rem)"
              />
              <img
                src={technicianWebp720}
                alt="Technik RES-SERWIS podczas diagnostyki instalacji grzewczej"
                className="aspect-[16/17] w-full object-cover"
                width={720}
                height={765}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="border-t border-border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Serwis w praktyce</p>
              <p className="mt-1 font-heading text-base font-semibold text-foreground">
                Doświadczenie widoczne w pracy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
