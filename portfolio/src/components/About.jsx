import SectionHeading from "./SectionHeading";
import { about } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="card about-card reveal">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
