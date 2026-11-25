# Shaik Anwar Hussain - Portfolio

A responsive dark-theme developer portfolio built with **React + Vite**. Icons from `react-icons`. No other UI library.

## Folder structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── profile.jpg               <- your photo (replace to change)
│   └── resume.pdf                <- ADD your resume here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css                 <- all styles + theme colors (top of file)
    ├── data/
    │   └── portfolioData.js      <- EDIT THIS to change any content
    ├── hooks/
    │   └── useReveal.js          <- scroll fade-in animation
    └── components/
        ├── Navbar.jsx  Hero.jsx  About.jsx  Education.jsx
        ├── Skills.jsx  SkillCard.jsx
        ├── Experience.jsx
        ├── Projects.jsx  ProjectCard.jsx
        ├── Certifications.jsx  Contact.jsx
        ├── SectionHeading.jsx  Footer.jsx
```

## Run locally

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
cd portfolio
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

Build for production: `npm run build` (output in `dist/`). Preview it with `npm run preview`.

## What to update (all in `src/data/portfolioData.js`)

| What | Where |
| --- | --- |
| Name, email, phone, LinkedIn | `personal` |
| **GitHub URL** | `personal.github` (currently a placeholder) |
| Profile photo | replace `public/profile.jpg` (or set `personal.profileImage`) |
| Resume | save your PDF as `public/resume.pdf` |
| Graduation year and CGPA | `education[0].graduationYear` / `.cgpa` |
| Exact university name | `education[0].university` (please confirm) |
| Project GitHub / demo links | `projects[].github` / `.demo` (buttons appear once filled) |
| Certificate links | `certifications[].url` (button is greyed out until filled) |

## Contact form

The form is frontend-only: on submit it opens the visitor's email app with the message pre-filled. To send real emails, edit `onSubmit` in `src/components/Contact.jsx` (a `TODO` comment marks the spot). Options: EmailJS, Formspree/Web3Forms, or your own Spring Boot endpoint.

## Deploy

Push to GitHub and import the repo in Vercel or Netlify (build command `npm run build`, output directory `dist`).
