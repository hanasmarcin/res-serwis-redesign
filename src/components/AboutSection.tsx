import { motion } from "framer-motion";
import technicianImage from "@/assets/work/technician-service.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 md:scroll-mt-28 py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>

          {/* Team image */}
          <motion.div
            className="mx-auto w-full max-w-[300px] overflow-hidden rounded-xl border border-border bg-card shadow-lg lg:mx-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={technicianImage}
              alt="Technik RES-SERWIS podczas diagnostyki instalacji grzewczej"
              className="aspect-[16/17] w-full object-cover"
              width={720}
              height={765}
              loading="lazy"
            />
            <div className="border-t border-border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Serwis w praktyce</p>
              <p className="mt-1 font-heading text-base font-semibold text-foreground">
                Doświadczenie widoczne w pracy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
