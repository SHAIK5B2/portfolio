import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { personal } from "../data/portfolioData";

const empty = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // ------------------------------------------------------------------
    // TODO (backend / email integration goes HERE)
    // Right now this form is frontend-only. Options to make it send mail:
    //   1. EmailJS (no backend needed): https://www.emailjs.com
    //   2. Formspree / Web3Forms: post `form` to their endpoint with fetch()
    //   3. Your own Spring Boot endpoint: fetch("/api/contact", { method: "POST", ... })
    //
    // Until then, we open the visitor's email app with the message pre-filled.
    // ------------------------------------------------------------------
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    setForm(empty);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Get In Touch" />

        <div className="contact-grid">
          <div className="contact-info reveal">
            <p className="muted">
              I'm open to Software Engineer and Java Full Stack Developer
              opportunities. Feel free to reach out.
            </p>

            <a className="contact-item card" href={`mailto:${personal.email}`}>
              <div className="icon-box"><FiMail size={20} /></div>
              <div>
                <span>Email</span>
                <strong>{personal.email}</strong>
              </div>
            </a>
            <a className="contact-item card" href={`tel:${personal.phone.replace(/\s/g, "")}`}>
              <div className="icon-box"><FiPhone size={20} /></div>
              <div>
                <span>Phone</span>
                <strong>{personal.phone}</strong>
              </div>
            </a>
            <a className="contact-item card" href={personal.linkedin} target="_blank" rel="noreferrer">
              <div className="icon-box"><FaLinkedin size={20} /></div>
              <div>
                <span>LinkedIn</span>
                <strong>Anwar Hussain Shaik</strong>
              </div>
            </a>
            <div className="contact-item card">
              <div className="icon-box"><FiMapPin size={20} /></div>
              <div>
                <span>Location</span>
                <strong>{personal.location}</strong>
              </div>
            </div>
          </div>

          <form className="card contact-form reveal" onSubmit={onSubmit}>
            <div className="field-row">
              <label>
                Name
                <input name="name" value={form.name} onChange={onChange} required placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="you@example.com" />
              </label>
            </div>
            <label>
              Subject
              <input name="subject" value={form.subject} onChange={onChange} required placeholder="What is this about?" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" value={form.message} onChange={onChange} required placeholder="Write your message..." />
            </label>

            <button type="submit" className="btn btn-primary">
              <FiSend /> Send Message
            </button>

            {sent && (
              <p className="form-note ok">
                Your email app should have opened with the message ready to send.
              </p>
            )}
            <p className="form-note">
              Frontend-only form: it opens your email app. Backend or email
              service integration can be added in <code>Contact.jsx</code>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
