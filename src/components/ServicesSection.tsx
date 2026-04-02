import { motion } from "framer-motion";
import { Wrench, GraduationCap, Settings, Package } from "lucide-react";

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
    icon: Package,
    title: "Części zamienne",
    description:
      "Dostarczamy oryginalne części zamienne do urządzeń Viessmann, Dimplex i innych czołowych producentów systemów OZE.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/50">
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
            Nasze usługi
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
