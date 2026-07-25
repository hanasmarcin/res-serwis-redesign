import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollLink from "@/components/ScrollLink";
import technicianMaintenance from "@/assets/work/technician-maintenance.jpg";

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
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-primary-on-dark">
              Kwalifikacje i doświadczenie
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
              Kwalifikacje, pomiary i praktyka serwisowa
            </h2>
            <p className="mt-5 leading-relaxed text-white/65">
              Wiedzę potwierdzamy szkoleniami i dokumentacją kwalifikacji z zakresu urządzeń grzewczych
              oraz systemów OZE. Dysponujemy zapleczem pomiarowym potrzebnym do oceny parametrów pracy,
              spalania i bezpieczeństwa instalacji.
            </p>
          </motion.div>

          <motion.figure
            className="mx-auto w-full max-w-[280px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] shadow-2xl sm:max-w-[300px] lg:mx-0 lg:justify-self-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src={technicianMaintenance}
              alt="Technik RES-SERWIS podczas pracy przy urządzeniu grzewczym"
              className="aspect-[4/5] w-full object-cover object-center"
              width={787}
              height={1400}
              loading="lazy"
            />
            <figcaption className="border-t border-white/10 px-4 py-3 text-xs uppercase tracking-[0.14em] text-white/55">
              Serwis urządzenia w praktyce
            </figcaption>
          </motion.figure>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="rounded-xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-on-dark">Wybrane referencje</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-on-dark">Marki i technologie</p>
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
              className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary-on-dark transition-colors hover:text-white"
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
