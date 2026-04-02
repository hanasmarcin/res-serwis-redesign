import { motion } from "framer-motion";
import { Shield, Award, Users } from "lucide-react";

const stats = [
  { icon: Shield, value: "15+", label: "Lat doświadczenia" },
  { icon: Award, value: "500+", label: "Zrealizowanych projektów" },
  { icon: Users, value: "100%", label: "Zadowolonych klientów" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              O firmie
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Renewable Energy Systems — Twój partner w OZE
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              RES-SERWIS to firma specjalizująca się w obsłudze technicznej, serwisie i doradztwie 
              w zakresie urządzeń wykorzystujących odnawialne źródła energii. Zajmujemy się pompami ciepła, 
              kolektorami słonecznymi, ogniwami fotowoltaicznymi oraz kotłami na biomasę.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Wieloletnie doświadczenie praktyczne, kompetentni pracownicy oraz stały kontakt z ośrodkami 
              naukowymi i czołowymi producentami urządzeń pozwalają zaoferować naszym klientom nowoczesne 
              rozwiązania techniczne o wysokiej jakości i dużej sprawności.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-lg p-6 text-center border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-heading text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
