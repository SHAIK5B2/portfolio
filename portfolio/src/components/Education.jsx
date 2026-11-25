import { FiBookOpen } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section alt">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Education" />
        <div className="grid grid-1">
          {education.map((e) => (
            <article key={e.institution} className="card edu-card reveal">
              <div className="icon-box">
                <FiBookOpen size={22} />
              </div>
              <div>
                <h3>{e.degree}</h3>
                <p className="muted strong">{e.institution}</p>
                <p className="muted">{e.university}</p>

                <ul className="meta-list">
                  <li>
                    <span>Graduation Year</span> {e.graduationYear}
                  </li>
                  <li>
                    <span>CGPA</span> {e.cgpa}
                  </li>
                  {e.extra.map((x) => (
                    <li key={x.label}>
                      <span>{x.label}</span> {x.value}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
