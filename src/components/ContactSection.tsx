import { Phone, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ContactItem = {
  accessibleLabel: string;
  external?: boolean;
  href: string;
  icon: LucideIcon;
  label: string;
  title: string;
};

const contactItems: ContactItem[] = [
  {
    accessibleLabel: "Zadzwoń pod numer +48 502 328 185",
    href: "tel:+48502328185",
    icon: Phone,
    label: "+48 502 328 185",
    title: "Telefon",
  },
  {
    accessibleLabel: "Napisz wiadomość na info@res-serwis.pl",
    href: "mailto:info@res-serwis.pl",
    icon: Mail,
    label: "info@res-serwis.pl",
    title: "E-mail",
  },
  {
    accessibleLabel: "Otwórz adres ul. Bydgoska 3B, 10-243 Olsztyn, Polska w Mapach Google",
    external: true,
    href: "https://www.google.com/maps/search/?api=1&query=ul.+Bydgoska+3B%2C+10-243+Olsztyn%2C+Polska",
    icon: MapPin,
    label: "ul. Bydgoska 3B, 10-243 Olsztyn, Polska",
    title: "Adres",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      tabIndex={-1}
      className="scroll-mt-24 bg-background py-20 md:scroll-mt-28 md:py-32"
    >
      <div className="container px-4">
        <div className="mb-16 text-center">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Kontakt
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Skontaktuj się z nami
          </h2>
          <p className="max-w-2xl mx-auto mt-5 text-muted-foreground leading-relaxed">
            Jeśli potrzebujesz serwisu, wsparcia technicznego, doradztwa lub informacji o urządzeniach OZE,
            zapraszamy do kontaktu.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactItems.map((item) => (
              <a
                key={item.title}
                data-contact-card
                href={item.href}
                aria-label={item.accessibleLabel}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col items-center rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-7"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <span className="flex min-h-11 items-center text-sm font-medium text-foreground underline decoration-primary/50 decoration-2 underline-offset-4 transition-colors group-hover:text-primary">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
