import { motion } from "framer-motion";
import { Wrench, GraduationCap, Settings, Package, ClipboardCheck, Clock3, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Serwis urządzeń",
    description:
      "Obsługa serwisowa, naprawy gwarancyjne i pogwarancyjne, konserwacja oraz nadzór nad eksploatacją pomp ciepła, kolektorów słonecznych i innych urządzeń OZE.",
  },
  {
    icon: GraduationCap,
    title: "Szkolenia",
    description:
      "Szkolenia dla inwestorów, firm instalacyjnych i projektantów na tematy związane z wykorzystaniem kolektorów słonecznych i pomp ciepła.",
  },
  {
    icon: Settings,
    title: "Dobór urządzeń",
    description:
      "Doradztwo techniczne w zakresie doboru kolektorów słonecznych i pomp ciepła z uwzględnieniem aspektów ekonomicznych i ekologicznych.",
  },
  {
    icon: ClipboardCheck,
    title: "Nadzór i uruchomienia",
    description:
      "Nadzór nad montażem urządzeń oraz wsparcie przy pierwszym uruchomieniu instalacji, z dbałością o poprawną i bezpieczną eksploatację systemu.",
  },
  {
    icon: Package,
    title: "Części zamienne",
    description:
      "Dostarczamy oryginalne części zamienne do urządzeń Viessmann, Dimplex i innych czołowych producentów systemów OZE.",
  },
  {
    icon: Clock3,
    title: "Serwis 24h Viessmann",
    eyebrow: "Współpraca serwisowa",
    description:
      "RES-SERWIS realizuje zlecenia serwisowe dla marki Viessmann. Zgłoszenia całodobowego serwisu urządzeń grzewczych należy kierować przez oficjalny serwis Viessmann.",
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
            Stawiamy na rzetelną diagnostykę, praktyczne podejście i rozwiązania dopasowane do realnych
            potrzeb inwestycji.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className={`flex h-full flex-col rounded-lg border bg-card p-6 shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg ${
                  service.featured
                    ? "border-2 border-primary/60 shadow-[0_18px_40px_-30px_rgba(234,88,12,0.22)]"
                    : "border-border"
                }`}
              >
                {!service.featured && (
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                )}
                {service.featured && service.eyebrow && (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                    {service.eyebrow}
                  </p>
                )}
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                {service.href && service.cta && (
                  <div className="mt-auto pt-5">
                    <Button
                      asChild
                      size="sm"
                      className={service.featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
                    >
                      <a href={service.href} target="_blank" rel="noopener noreferrer">
                        {service.cta}
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
