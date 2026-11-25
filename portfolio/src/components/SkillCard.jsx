import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiTool,
  FiCpu,
} from "react-icons/fi";

const icons = {
  code: FiCode,
  frontend: FiLayout,
  backend: FiServer,
  database: FiDatabase,
  tools: FiTool,
  concepts: FiCpu,
};

// Reusable card: one group of skills
export default function SkillCard({ title, icon, skills }) {
  const Icon = icons[icon] || FiCode;
  return (
    <article className="card skill-card reveal">
      <div className="skill-head">
        <div className="icon-box">
          <Icon size={20} />
        </div>
        <h3>{title}</h3>
      </div>
      <div className="chips">
        {skills.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}
