import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";
import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="Technical Skills" />
        <div className="grid grid-3">
          {skillGroups.map((g) => (
            <SkillCard key={g.title} {...g} />
          ))}
        </div>
      </div>
    </section>
  );
}
