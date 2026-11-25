import { FiBriefcase } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section alt">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Internship Experience" />
        <div className="timeline">
          {experience.map((x) => (
            <div key={x.role + x.company} className="timeline-item reveal">
              <span className="timeline-dot">
                <FiBriefcase size={14} />
              </span>
              <div className="card">
                <span className="date-badge">{x.duration}</span>
                <h3>{x.role}</h3>
                <p className="muted strong">{x.company}</p>
                <p className="muted">{x.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
