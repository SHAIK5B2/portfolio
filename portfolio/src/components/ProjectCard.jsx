import { FiExternalLink, FiCheck } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

// Reusable card: one project
export default function ProjectCard({
  title,
  status,
  description,
  tech,
  features,
  github,
  demo,
}) {
  const inProgress = status === "In Progress";
  return (
    <article className="card project-card reveal">
      <div className="project-top">
        <h3>{title}</h3>
        <span className={`status ${inProgress ? "status-wip" : "status-done"}`}>
          {status}
        </span>
      </div>

      <p className="muted">{description}</p>

      {features.length > 0 && (
        <ul className="feature-list">
          {features.map((f) => (
            <li key={f}>
              <FiCheck /> {f}
            </li>
          ))}
        </ul>
      )}

      <div className="chips">
        {tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      {(github || demo) && (
        <div className="card-actions">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="link-btn">
              <FaGithub /> Code
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="link-btn">
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
