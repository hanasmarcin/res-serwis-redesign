import { motion } from "framer-motion";
import {
  ChartNoAxesCombined,
  Check,
  ClipboardCheck,
  GraduationCap,
  Package,
  Wrench,
} from "lucide-react";

const serviceAreas = [
  {
    icon: Wrench,
    title: "Serwis i diagnostyka",
    description: "Przywracamy sprawność urządzeń i pomagamy ograniczać ryzyko kolejnych awarii.",
    items: [
      "naprawy gwarancyjne i pogwarancyjne urządzeń Viessmann i Dimplex",
      "przeglądy i konserwacja kotłów gazowych i olejowych, pomp ciepła oraz kolektorów słonecznych",
      "chemiczne czyszczenie wymienników i korpusów kotłów",
      "pomiary emisji spalin oraz regulacja spalania palników",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Uruchomienia i obsługa instalacji",
    description: "Sprawdzamy instalację jako całość — od poprawności montażu po bezpieczną eksploatację.",
    items: [
      "pierwsze uruchomienia urządzeń i instalacji",
      "nadzór techniczny nad montażem",
      "uruchomienie i kontrola stacji uzdatniania wody",
      "regulacja instalacji wentylacji mechanicznej",
    ],
  },
  {
    icon: ChartNoAxesCombined,
    title: "Dobór i analiza rozwiązań",
    description: "Dobieramy urządzenia na podstawie warunków technicznych, sposobu użytkowania i ekonomii.",
    items: [
      "dobór pomp ciepła i kolektorów słonecznych",
      "analiza zapotrzebowania na energię oraz warunków budynku",
      "uwzględnienie położenia, nachylenia dachu i profilu zużycia ciepłej wody",
      "porównanie sprawności, pokrycia potrzeb energetycznych i możliwych oszczędności",
    ],
  },
  {
    icon: Package,
    title: "Części zamienne",
    description: "Pomagamy zidentyfikować właściwy podzespół i sprawnie przeprowadzić naprawę.",
    items: [
      "oryginalne części do urządzeń Viessmann i Dimplex",
      "dobór części na podstawie modelu i objawów usterki",
      "sprawdzenie dostępności podzespołów",
      "połączenie dostawy części z usługą serwisową",
    ],
  },
];

const trainingGroups = [
  {
    title: "Użytkownicy",
    description: "Obsługa urządzeń, bezpieczna eksploatacja i rozpoznawanie nieprawidłowości.",
  },
  {
    title: "Instalatorzy",
    description: "Praktyczne zagadnienia montażu i uruchamiania pomp ciepła, kolektorów oraz kotłów.",
  },
  {
    title: "Projektanci i inwestorzy",
    description: "Dobór rozwiązań, szczególne zastosowania oraz ocena wariantów technicznych.",
  },
];

const ServiceDetailsSection = () => {
  return (
    <section className="bg-background py-20 md:py-28" aria-labelledby="service-details-title">
      <div className="container px-4">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Zakres prac
          </p>
          <h2
            id="service-details-title"
            className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl"
          >
            Od diagnozy po bezpieczną eksploatację
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Każde zlecenie zaczynamy od rozpoznania instalacji i rzeczywistej przyczyny problemu.
            Poniżej przedstawiamy najczęstsze prace realizowane przez nasz serwis.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {serviceAreas.map((area, index) => (
            <motion.article
              key={area.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <area.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                </div>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-8 overflow-hidden rounded-xl border border-primary/20 bg-primary/[0.06]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-b border-primary/15 p-6 md:flex md:items-center md:gap-4">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground md:mb-0">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-xl font-semibold text-foreground">Szkolenia dopasowane do odbiorców</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Przekazujemy wiedzę potrzebną do świadomego wyboru, prawidłowego montażu i bezpiecznej obsługi.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3">
            {trainingGroups.map((group, index) => (
              <div
                key={group.title}
                className={`p-6 ${index > 0 ? "border-t border-primary/15 md:border-l md:border-t-0" : ""}`}
              >
                <h3 className="font-heading font-semibold text-foreground">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
