// =====================================================================
//  EDIT THIS FILE to update anything on your portfolio.
//  Components only display what is defined here.
// =====================================================================

export const personal = {
  name: "Shaik Anwar Hussain",
  shortName: "Anwar",
  title: "Java Full Stack Developer",
  subtitle: "Java Full Stack Developer | Aspiring Software Engineer",
  heroIntro:
    "I build responsive web applications and scalable backend solutions using Java, Spring Boot, React, and MySQL.",
  email: "shaikanwar5b2@gmail.com",
  phone: "+91 8639513007",
  location: "India",
  linkedin: "https://www.linkedin.com/in/anwar-hussain-shaik-96b94a32b/",
  // TODO: replace with your GitHub profile URL when ready
  github: "https://github.com/your-username",
  // Photo lives in /public. To change it, replace public/profile.jpg
  // (or point this to another file, e.g. "/my-photo.jpg")
  profileImage: "/profile.jpg",
  // Put your resume PDF in /public with this name (or change the path)
  resume: "/resume.pdf",
};

export const about = [
  "I am a passionate Java Full Stack Developer with a strong foundation in Java, web development, and database management.",
  "I have knowledge of frontend technologies such as HTML, CSS, JavaScript, and React.js, along with backend technologies including Java, Spring Boot, Hibernate, and REST APIs.",
  "I enjoy developing responsive and user-friendly web applications, solving programming problems, and learning new technologies.",
  "I have worked on full-stack development projects involving authentication, product management, REST API development, and database integration.",
  "I am seeking opportunities as a Software Engineer or Java Full Stack Developer where I can apply my technical skills and contribute to real-world projects.",
];

export const education = [
  {
    institution: "Sri Venkateswara College of Engineering",
    degree: "B.Tech - Computer Science and Engineering",
    // TODO: confirm the exact university name
    university: "Jawaharlal Nehru Technological University",
    // TODO: fill in these two values
    graduationYear: "Add graduation year",
    cgpa: "Add CGPA",
    extra: [{ label: "Intermediate", value: "76%" }],
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["Java", "Python", "JavaScript", "C"],
  },
  {
    title: "Frontend",
    icon: "frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Web Design"],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: [
      "Core Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "JDBC",
      "REST APIs",
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: ["MySQL", "SQL", "DBMS"],
  },
  {
    title: "Tools",
    icon: "tools",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Eclipse"],
  },
  {
    title: "Core Concepts",
    icon: "concepts",
    skills: ["OOP", "DSA", "API Integration", "Debugging", "Testing"],
  },
];

export const experience = [
  {
    role: "Java Full Stack Developer Intern",
    company: "Excler Technologies",
    duration: "April 2026 - June 2026",
    description:
      "Gained practical experience in Java Full Stack Development and worked with Java-based application development concepts, frontend and backend technologies, and web application development.",
  },
];

export const projects = [
  {
    title: "E-Commerce Web Application",
    status: "Completed",
    description:
      "A full-stack e-commerce application for browsing products, searching items, managing shopping carts, and performing product management operations.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React.js",
      "MySQL",
      "Hibernate",
      "JPA",
      "REST APIs",
    ],
    features: [
      "Product listing",
      "Product search",
      "Add and manage products",
      "Shopping cart",
      "User authentication and authorization",
      "REST API integration",
      "MySQL database integration",
    ],
    // TODO: add your repository / live demo links ("" hides the button)
    github: "",
    demo: "",
  },
  {
    title: "User Authentication & Notes REST API",
    status: "Completed",
    description:
      "A backend REST API for user registration, login, and secure notes-related functionality.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate",
      "JPA",
      "MySQL",
      "REST APIs",
    ],
    features: [
      "User registration",
      "Login authentication",
      "JWT-based security",
      "Secured API endpoints",
      "User-specific notes",
      "Database integration",
    ],
    github: "",
    demo: "",
  },
  {
    title: "Placement Cell Management System",
    status: "In Progress",
    description:
      "A Java project intended to manage college placement activities, student information, and placement-related processes.",
    tech: ["Java", "Maven"],
    features: [],
    github: "",
    demo: "",
  },
];

export const certifications = [
  {
    title: "Microsoft Azure Fundamentals - AZ-900",
    issuer: "Microsoft",
    // TODO: replace "" with your certificate / verification URL
    url: "",
  },
  {
    title: "Java Full Stack Developer",
    issuer: "ExcelR",
    url: "",
  },
  {
    title: "JPMorgan Chase & Co. Software Engineering Job Simulation",
    issuer: "Forage",
    url: "",
  },
  {
    title: "Front-End Software Engineering Job Simulation",
    issuer: "Forage",
    credentialId: "6aafc5da875b6871a8b9ab07",
    url: "",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
