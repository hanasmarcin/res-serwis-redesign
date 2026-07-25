import { motion } from "framer-motion";
import boilerRoom from "@/assets/work/boiler-room.jpg";
import heatPumpRoom from "@/assets/work/heat-pump-room.jpg";
import solarCollectors from "@/assets/work/solar-collectors.jpg";
import systemDiagnostics from "@/assets/work/system-diagnostics.jpg";

const projects = [
  {
    image: boilerRoom,
    title: "Serwis kotłowni",
    description: "Diagnostyka i obsługa rozbudowanych układów grzewczych",
    alt: "Kotłownia z urządzeniami grzewczymi i instalacją rurową",
  },
  {
    image: systemDiagnostics,
    title: "Diagnostyka układu",
    description: "Kontrola parametrów pracy instalacji",
    alt: "Ekran diagnostyczny przedstawiający parametry obiegów grzewczych",
  },
  {
    image: solarCollectors,
    title: "Instalacje solarne",
    description: "Przeglądy i obsługa kolektorów słonecznych",
    alt: "Rzędy kolektorów słonecznych na dachu budynku",
  },
  {
    image: heatPumpRoom,
    title: "Układy pomp ciepła",
    description: "Serwis urządzeń w instalacjach wielomodułowych",
    alt: "Pomieszczenie techniczne z kilkoma jednostkami pomp ciepła",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 bg-muted/50 py-16 md:scroll-mt-28 md:py-24">
      <div className="container px-4">
        <motion.div
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Realizacje
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Prawdziwe instalacje, konkretna praca
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Każda instalacja wymaga uważnej diagnostyki i rozwiązań dopasowanych do warunków technicznych.
            Pokazujemy wybrane realizacje i codzienną pracę naszego serwisu.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {projects.map((project, index) => (
            <motion.figure
              key={project.title}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="p-3 md:p-4">
                <h3 className="font-heading text-sm font-semibold text-foreground md:text-base">{project.title}</h3>
                <p className="mt-1 hidden text-xs leading-relaxed text-muted-foreground lg:block">
                  {project.description}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
