import boilerAvif400 from "@/assets/generated/boiler-room-400.avif";
import boilerAvif800 from "@/assets/generated/boiler-room-800.avif";
import boilerWebp400 from "@/assets/generated/boiler-room-400.webp";
import boilerWebp800 from "@/assets/generated/boiler-room-800.webp";
import heatPumpAvif400 from "@/assets/generated/heat-pump-room-400.avif";
import heatPumpAvif800 from "@/assets/generated/heat-pump-room-800.avif";
import heatPumpWebp400 from "@/assets/generated/heat-pump-room-400.webp";
import heatPumpWebp800 from "@/assets/generated/heat-pump-room-800.webp";
import solarAvif400 from "@/assets/generated/solar-collectors-400.avif";
import solarAvif800 from "@/assets/generated/solar-collectors-800.avif";
import solarWebp400 from "@/assets/generated/solar-collectors-400.webp";
import solarWebp800 from "@/assets/generated/solar-collectors-800.webp";
import diagnosticsAvif400 from "@/assets/generated/system-diagnostics-400.avif";
import diagnosticsAvif800 from "@/assets/generated/system-diagnostics-800.avif";
import diagnosticsWebp400 from "@/assets/generated/system-diagnostics-400.webp";
import diagnosticsWebp800 from "@/assets/generated/system-diagnostics-800.webp";

const projectImageSizes =
  "(min-width: 1400px) 335px, (min-width: 768px) calc(25vw - 2rem), calc(50vw - 1.5rem)";

const projects = [
  {
    avif: `${boilerAvif400} 400w, ${boilerAvif800} 800w`,
    webp: `${boilerWebp400} 400w, ${boilerWebp800} 800w`,
    fallback: boilerWebp800,
    title: "Serwis kotłowni",
    description: "Diagnostyka i obsługa rozbudowanych układów grzewczych",
    alt: "Kotłownia z urządzeniami grzewczymi i instalacją rurową",
  },
  {
    avif: `${diagnosticsAvif400} 400w, ${diagnosticsAvif800} 800w`,
    webp: `${diagnosticsWebp400} 400w, ${diagnosticsWebp800} 800w`,
    fallback: diagnosticsWebp800,
    title: "Diagnostyka układu",
    description: "Kontrola parametrów pracy instalacji",
    alt: "Ekran diagnostyczny przedstawiający parametry obiegów grzewczych",
  },
  {
    avif: `${solarAvif400} 400w, ${solarAvif800} 800w`,
    webp: `${solarWebp400} 400w, ${solarWebp800} 800w`,
    fallback: solarWebp800,
    title: "Instalacje solarne",
    description: "Przeglądy i obsługa kolektorów słonecznych",
    alt: "Rzędy kolektorów słonecznych na dachu budynku",
  },
  {
    avif: `${heatPumpAvif400} 400w, ${heatPumpAvif800} 800w`,
    webp: `${heatPumpWebp400} 400w, ${heatPumpWebp800} 800w`,
    fallback: heatPumpWebp800,
    title: "Układy pomp ciepła",
    description: "Serwis urządzeń w instalacjach wielomodułowych",
    alt: "Pomieszczenie techniczne z kilkoma jednostkami pomp ciepła",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      tabIndex={-1}
      className="scroll-mt-24 bg-muted/50 py-16 md:scroll-mt-28 md:py-24"
    >
      <div className="container px-4">
        <div className="mb-10 max-w-3xl">
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
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {projects.map((project) => (
            <figure
              key={project.title}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm"
            >
              <picture>
                <source type="image/avif" srcSet={project.avif} sizes={projectImageSizes} />
                <source type="image/webp" srcSet={project.webp} sizes={projectImageSizes} />
                <img
                  src={project.fallback}
                  alt={project.alt}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                  width={800}
                  height={533}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption className="p-3 md:p-4">
                <h3 className="font-heading text-sm font-semibold text-foreground md:text-base">{project.title}</h3>
                <p className="mt-1 hidden text-xs leading-relaxed text-muted-foreground lg:block">
                  {project.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
