import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
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
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Telefon",
                lines: ["+48 502 328 185", "89 526 05 18"],
                href: "tel:+48502328185",
              },
              {
                icon: Mail,
                title: "E-mail",
                lines: ["info@res-serwis.pl"],
                href: "mailto:info@res-serwis.pl",
              },
              {
                icon: MapPin,
                title: "Adres",
                lines: ["ul. Jagiellońska 57B/16", "10-283 Olsztyn"],
                href: "https://maps.google.com/?q=Jagiellońska+57B+Olsztyn",
              },
            ].map((item, i) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                {item.lines.map((line) => (
                  <p key={line} className="text-muted-foreground text-sm">{line}</p>
                ))}
              </motion.a>
            ))}
          </div>

          {/* Company details */}
          <motion.div
            className="mt-12 text-center text-sm text-muted-foreground space-y-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="font-semibold text-foreground">RES-SERWIS Odnawialne Źródła Energii — Hanas Dariusz</p>
            <p>NIP: 739-143-04-34 | REGON: 280185471</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
