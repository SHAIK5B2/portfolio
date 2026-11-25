import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personal } from "../data/portfolioData";

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="eyebrow">Welcome to my portfolio</span>
          <h1>
            Hi, I'm <span className="accent">{personal.name}</span>
          </h1>
          <h2 className="hero-role">{personal.title}</h2>
          <p className="hero-intro">{personal.heroIntro}</p>

          <div className="btn-row">
            <a href="#projects" className="btn btn-primary" onClick={scrollTo("projects")}>
              View My Projects <FiArrowRight />
            </a>
            <a href={personal.resume} className="btn btn-outline" download>
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost" onClick={scrollTo("contact")}>
              <FiMail /> Contact Me
            </a>
          </div>

          <div className="social-row">
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            <img src={personal.profileImage} alt={`${personal.name} profile`} />
          </div>
        </div>
      </div>
    </section>
  );
}
