import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading eyebrow="Projects" title="Projects" />
        <div className="grid grid-3 projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
