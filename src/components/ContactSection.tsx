import { Phone, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ContactAction = {
  accessibleLabel?: string;
  label: string;
  href: string;
  external?: boolean;
};

type ContactItem = {
  icon: LucideIcon;
  title: string;
  actions: ContactAction[];
};

const contactItems: ContactItem[] = [
  {
    icon: Phone,
    title: "Telefon",
    actions: [
      {
        accessibleLabel: "telefon komórkowy: +48 502 328 185",
        label: "+48 502 328 185",
        href: "tel:+48502328185",
      },
      {
        accessibleLabel: "telefon stacjonarny: 89 526 05 18",
        label: "89 526 05 18",
        href: "tel:+48895260518",
      },
    ],
  },
  {
    icon: Mail,
    title: "E-mail",
    actions: [
      {
        label: "info@res-serwis.pl",
        href: "mailto:info@res-serwis.pl",
      },
      {
        label: "www.res-serwis.pl",
        href: "/",
      },
    ],
  },
  {
    icon: MapPin,
    title: "Adres",
    actions: [
      {
        label: "ul. Jagiellońska 57B/16, 10-283 Olsztyn",
        href: "https://www.google.com/maps/search/?api=1&query=Jagiello%C5%84ska+57B%2F16%2C+10-283+Olsztyn",
        external: true,
      },
    ],
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
              <article
                key={item.title}
                className="h-full rounded-lg border border-border bg-card p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <div className="flex flex-col items-center gap-2">
                  {item.actions.map((action) => (
                    <a
                      key={action.href}
                      href={action.href}
                      aria-label={action.accessibleLabel}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noopener noreferrer" : undefined}
                      className="inline-flex min-h-11 items-center rounded-md px-2 text-sm font-medium text-foreground underline decoration-primary/50 decoration-2 underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
