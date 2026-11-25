import { FiAward, FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="section alt">
      <div className="container">
        <SectionHeading eyebrow="Certifications" title="Certifications" />
        <div className="grid grid-2">
          {certifications.map((c) => (
            <article key={c.title} className="card cert-card reveal">
              <div className="icon-box">
                <FiAward size={22} />
              </div>
              <div className="cert-body">
                <h3>{c.title}</h3>
                <p className="muted strong">{c.issuer}</p>
                {c.credentialId && (
                  <p className="cred">
                    Credential ID: <code>{c.credentialId}</code>
                  </p>
                )}

                {c.url ? (
                  <a href={c.url} target="_blank" rel="noreferrer" className="link-btn">
                    <FiExternalLink /> View Certificate
                  </a>
                ) : (
                  <span
                    className="link-btn disabled"
                    title="Add the certificate URL in src/data/portfolioData.js"
                  >
                    <FiExternalLink /> View Certificate (link coming soon)
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
