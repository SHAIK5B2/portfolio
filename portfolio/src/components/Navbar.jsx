import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, personal } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Add background after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={go("home")}>
          {personal.shortName}
          <span>.</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={go(id)}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </header>
  );
}
