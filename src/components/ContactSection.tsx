import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Telefon",
    lines: ["telefon komórkowy: +48 502 328 185", "telefon stacjonarny: 89 526 05 18"],
    href: "tel:+48502328185",
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["info@res-serwis.pl", "www.res-serwis.pl"],
    href: "mailto:info@res-serwis.pl",
  },
  {
    icon: MapPin,
    title: "Adres",
    lines: ["ul. Jagiellońska 57B/16", "10-283 Olsztyn"],
    href: "https://maps.google.com/?q=Jagiellońska+57B+Olsztyn",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 md:scroll-mt-28 py-20 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Kontakt
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Skontaktuj się z nami
          </h2>
          <p className="max-w-2xl mx-auto mt-5 text-muted-foreground leading-relaxed">
            Jeśli potrzebujesz serwisu, wsparcia technicznego, doradztwa lub informacji o urządzeniach OZE,
            zapraszamy do kontaktu. Odpowiadamy rzeczowo, konkretnie i z nastawieniem na trwałe rozwiązania.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactItems.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                className="block group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="h-full rounded-lg border border-border bg-card p-8 text-center shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-lg">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-primary/20">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-muted-foreground text-sm">{line}</p>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
