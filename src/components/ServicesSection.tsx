import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  Check,
  ClipboardCheck,
  Clock3,
  GraduationCap,
  Package,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  eyebrow?: string;
  href?: string;
  cta?: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: Wrench,
    title: "Serwis i diagnostyka",
    description:
      "Przywracamy sprawność urządzeń i pomagamy ograniczać ryzyko kolejnych awarii.",
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
    description:
      "Sprawdzamy instalację jako całość — od poprawności montażu po bezpieczną eksploatację.",
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
    description:
      "Dobieramy urządzenia na podstawie warunków technicznych, sposobu użytkowania i ekonomii.",
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
    description:
      "Pomagamy zidentyfikować właściwy podzespół i sprawnie przeprowadzić naprawę.",
    items: [
      "oryginalne części do urządzeń Viessmann i Dimplex",
      "dobór części na podstawie modelu i objawów usterki",
      "sprawdzenie dostępności podzespołów",
      "połączenie dostawy części z usługą serwisową",
    ],
  },
  {
    icon: GraduationCap,
    title: "Szkolenia",
    description:
      "Szkolenia na tematy związane z wykorzystaniem kolektorów słonecznych i pomp ciepła.",
    items: [
      "użytkownicy — obsługa urządzeń, bezpieczna eksploatacja i rozpoznawanie nieprawidłowości",
      "instalatorzy — praktyczne zagadnienia montażu i uruchamiania pomp ciepła, kolektorów oraz kotłów",
      "projektanci i inwestorzy — dobór rozwiązań, szczególne zastosowania i ocena wariantów technicznych",
    ],
  },
  {
    icon: Clock3,
    title: "Serwis 24h Viessmann",
    eyebrow: "Współpraca serwisowa",
    description:
      "RES-SERWIS realizuje zlecenia serwisowe dla marki Viessmann. Zgłoszenia całodobowego serwisu urządzeń grzewczych należy kierować przez oficjalny serwis Viessmann.",
    items: [],
    href: "https://viessmann-serwis.pl",
    cta: "Przejdź do serwisu",
    featured: true,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-24 md:scroll-mt-28 py-20 md:py-32 bg-muted/50">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Oferta
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Kompleksowe wsparcie dla instalacji odnawialnych źródeł energii
          </h2>
          <p className="max-w-3xl mx-auto mt-5 text-muted-foreground leading-relaxed">
            Oferujemy usługi dla klientów indywidualnych, inwestorów, firm instalacyjnych i projektantów.
            Poniżej przedstawiamy najczęstsze prace realizowane przez nasz serwis.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              className={`flex h-full flex-col rounded-xl bg-card p-6 shadow-sm md:p-7 ${
                service.featured ? "border-2 border-primary/40" : "border border-border"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              {service.eyebrow && (
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {service.eyebrow}
                </p>
              )}
              <h3 className={`${service.eyebrow ? "mt-1" : "mt-5"} font-heading text-xl font-semibold text-foreground`}>
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              {service.items.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {service.href && service.cta && (
                <div className="mt-auto pt-6">
                  <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={service.href} target="_blank" rel="noopener noreferrer">
                      {service.cta}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
