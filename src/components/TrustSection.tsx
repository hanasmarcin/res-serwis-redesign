import { motion } from "framer-motion";
import { ArrowRight, Award, Gauge, Wrench } from "lucide-react";
import ScrollLink from "@/components/ScrollLink";
import combustionAnalysis from "@/assets/work/combustion-analysis.jpg";

const qualifications = [
  {
    icon: Award,
    title: "Kwalifikacje serwisowe",
    description:
      "Wiedza potwierdzana szkoleniami i dokumentacją kwalifikacji z zakresu urządzeń grzewczych oraz systemów OZE.",
  },
  {
    icon: Gauge,
    title: "Diagnostyka i pomiary",
    description:
      "Zaplecze pomiarowe i kontrolne potrzebne do oceny parametrów pracy, spalania oraz bezpieczeństwa instalacji.",
  },
  {
    icon: Wrench,
    title: "Praktyka instalacyjna",
    description:
      "Doświadczenie w serwisie, pierwszych uruchomieniach, nadzorze montażu i rozwiązywaniu nietypowych problemów.",
  },
];

const references = [
  { name: "Instalex", detail: "firma instalacyjna • Ostróda" },
  { name: "Elektro-Sanit", detail: "firma instalacyjna • Olsztyn" },
  { name: "Glen Dimplex Polska", detail: "producent urządzeń grzewczych" },
  {
    name: "Specjalny Ośrodek Szkolno-Wychowawczy",
    detail: "obiekt publiczny • Żardeniki",
  },
];

const brands = ["Viessmann", "Dimplex", "Weishaupt", "Riello", "Giersch", "Epuro"];

const TrustSection = () => {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-white md:py-28">
      <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="container relative px-4">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              Kwalifikacje i doświadczenie
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
              Kompetencje techniczne potwierdzone praktyką
            </h2>
            <p className="mt-5 leading-relaxed text-white/65">
              Dobry serwis to nie tylko naprawa pojedynczego urządzenia. To umiejętność oceny całej instalacji,
              wykonania właściwych pomiarów i dobrania rozwiązania, które pozostanie bezpieczne w eksploatacji.
            </p>
          </motion.div>

          <motion.figure
            className="w-full max-w-[420px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] shadow-2xl lg:justify-self-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src={combustionAnalysis}
              alt="Analizator spalin podczas kontrolnego pomiaru parametrów spalania"
              className="aspect-[3/2] w-full object-cover"
              width={1200}
              height={800}
              loading="lazy"
            />
            <figcaption className="border-t border-white/10 px-4 py-3 text-xs uppercase tracking-[0.14em] text-white/55">
              Kontrolne pomiary parametrów spalania
            </figcaption>
          </motion.figure>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {qualifications.map((qualification, index) => (
            <motion.article
              key={qualification.title}
              className="rounded-xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15">
                <qualification.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold">{qualification.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{qualification.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="rounded-xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Wybrane referencje</p>
            <h3 className="mt-3 font-heading text-2xl font-semibold">Podmioty, które korzystały z naszego wsparcia</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {references.map((reference) => (
                <div key={reference.name} className="rounded-lg border border-white/10 bg-black/10 p-4">
                  <p className="font-heading font-semibold text-white">{reference.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/50">{reference.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Marki i technologie</p>
            <h3 className="mt-3 font-heading text-2xl font-semibold">Doświadczenie z urządzeniami wielu producentów</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Na przestrzeni lat firma zdobywała doświadczenie przy urządzeniach i rozwiązaniach następujących marek:
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 font-heading text-sm font-medium text-white/85"
                >
                  {brand}
                </span>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-white/45">
              Możliwość obsługi zależy od modelu urządzenia, rodzaju usterki oraz dostępności części.
            </p>
            <ScrollLink
              href="#contact"
              className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Zapytaj o swoje urządzenie
              <ArrowRight className="h-4 w-4" />
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
