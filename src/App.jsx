import React, { useEffect, useState, useCallback } from "react";

/**
 * Resume Portfolio — Optimized Single-file React
 * Improvements: Accessibility, Performance, UX, SEO
 */

// ---------- Utilities
const classNames = (...xs) => xs.filter(Boolean).join(" ");

const Container = ({ children, className = "" }) => (
  <div className={classNames("mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
    {subtitle && <p className="mt-2 text-sm sm:text-base text-gray-600">{subtitle}</p>}
  </div>
);

// ---------- Data
const PROFILE = {
  name: "Enmanuel Matos Reyes",
  title: "Mechatronics Engineering Student • Robotics & Automation",
  blurb: "Mechatronics student with hands-on experience in automation, CAD modeling, and sensor-based systems. Strong foundation in PLC programming, mechanical design, and cross-functional teamwork. Seeking a 2025 summer-fall co-op focusing on Robotics and Automation.",
  location: "Rochester, NY",
  email: "enmanuel.m.r.1216@gmail.com",
  github: "https://github.com/Eman-api",
  linkedin: "https://www.linkedin.com/in/enmanuel-matos",
  resumeUrl: "/portfolio/resume.pdf",
  phone: "(646)-387-3270",
  education: "Rochester Institute of Technology (RIT) - B.S. Mechatronics, May 2027 - GPA 3.07",
};

const SKILLS = {
  "Robotics & Automation": [
    "RobotStudio",
    "PLC Programming (Allen-Bradley/Siemens)",
    "Pneumatic & Hydraulic Systems",
    "Sensor Integration",
    "PID & Motion Control"
  ],
  "Embedded Systems": [
    "Arduino",
    "Raspberry Pi",
    "Code Composer Studio",
    "Embedded C/C++",
    "Data Acquisition"
  ],
  "AI & Data": [
    "Python (ML/Automation)",
    "LangGraph",
    "OpenCV",
    "MATLAB",
    "Excel Automation"
  ],
  "Design & Simulation": [
    "SolidWorks",
    "Autodesk Inventor",
    "AutoCAD",
    "Simulink",
    "RocketPy",
    "OpenRocket"
  ],
  "Programming": [
    "C/C++",
    "Python",
    "Java",
    "MATLAB",
    "SQL",
    "ABB RAPID"
  ],
  "Project Tools": [
    "Git/GitHub",
    "System Integration",
    "Technical Documentation",
    "Agile Collaboration"
  ]
};

const PROJECTS = [
  {
    title: "RocketPy Simulation & Launch Analysis Tool",
    description: "Python-based RocketPy simulation app for rocket trajectory and aerodynamic modeling. Automated input parameters and post-processing, cutting simulation setup time by 60%.",
    stack: ["Python", "MATLAB", "RocketPy", "OpenRocket"],
    github: "https://github.com/Eman-api/rocketpy-simulation",
    demo: null,
  },
  {
    title: "ABB Robot Pick-and-Place Automation",
    description: "Programmed ABB IRB robotic arm using RAPID language for automated pick-and-place operations. Optimized motion paths to reduce cycle time by 25%.",
    stack: ["ABB RAPID", "RobotStudio", "PLC", "Sensors"],
    github: "https://github.com/Eman-api/abb-robot-automation",
    demo: null,
  },
  {
    title: "Allen-Bradley PLC Control System",
    description: "Designed and programmed an Allen-Bradley PLC for fully automated multi-cylinder process using proximity sensors and solenoid valves with safety interlocks.",
    stack: ["RSLogix 5000", "Ladder Logic", "Automation Studio"],
    github: "https://github.com/Eman-api/plc-control-system",
    demo: null,
  },
  {
    title: "Pneumatic Logic Lab System",
    description: "Constructed AND/OR valve-controlled pneumatic circuits for dual-operator actuation. Optimized cylinder speed using flow regulators and quick exhaust valves.",
    stack: ["Automation Studio", "Pneumatics", "Control Logic"],
    github: "https://github.com/Eman-api/pneumatic-logic",
    demo: null,
  },
];

const EXPERIENCE = [
  {
    org: "RIT Launch IREC (Rocketry Club)",
    role: "Simulation & Analysis Lead",
    time: "Sep 2025 — Present",
    bullets: [
      "Developed Python-based RocketPy simulation tools for trajectory and aerodynamic modeling.",
      "Validated results through OpenRocket comparisons, improving flight accuracy predictions.",
    ],
  },
  {
    org: "North River Shipyard",
    role: "Boat/Ship Engineer & Mechanic Intern",
    time: "Summer 2025",
    bullets: [
      "Assisted with diagnostics, repair, and maintenance of marine engines and hydraulic systems.",
      "Performed hands-on troubleshooting and testing of propulsion systems and onboard electronics.",
      "Collaborated with senior engineers on system calibration and testing for large vessels.",
    ],
  },
  {
    org: "Society of Hispanic Professional Engineers (SHPE)",
    role: "Active Member",
    time: "2023 — Present",
    bullets: [
      "Engaged in professional development workshops and networking events.",
      "Contributed to community outreach and STEM education initiatives.",
    ],
  },
  {
    org: "CET Student Activity Board (CETSAB)",
    role: "Member / Event Coordinator",
    time: "2024 — Present",
    bullets: [
      "Organized campus events and managed logistics for engineering student activities.",
      "Collaborated with faculty and student organizations to enhance campus engagement.",
    ],
  },
];

// ---------- Navbar
const Navbar = ({ route, setRoute }) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = useCallback(() => setOpen(false), []);

  const handleFeaturesClick = useCallback((e) => {
    e.preventDefault();
    window.location.hash = "/features";
    setRoute("/features");
    closeMenu();
  }, [setRoute, closeMenu]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="font-bold tracking-tight text-lg hover:opacity-80 transition-opacity">
          {PROFILE.name}
        </a>

        <nav className="hidden md:flex gap-6 text-sm items-center" aria-label="Main navigation">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="hover:opacity-80 transition-opacity">
              {n.label}
            </a>
          ))}
          <a
            href="#/features"
            onClick={handleFeaturesClick}
            className={classNames(
              "px-3 py-1 rounded-full border transition-colors",
              route === "/features" ? "bg-black text-white" : "hover:bg-gray-50"
            )}
          >
            Features
          </a>
          <a
            href={PROFILE.github}
            className="px-3 py-1 rounded-full border hover:bg-black hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded p-2 border hover:bg-gray-50 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t bg-white" role="navigation" aria-label="Mobile navigation">
          <Container className="py-3 flex flex-col gap-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={closeMenu} className="hover:opacity-80 transition-opacity">
                {n.label}
              </a>
            ))}
            <a href="#/features" onClick={handleFeaturesClick}>
              Features
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              GitHub
            </a>
          </Container>
        </div>
      )}
    </header>
  );
};

// ---------- Sections
const Hero = () => (
  <section id="home" aria-label="Hero section">
    <Container className="py-16 sm:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {PROFILE.title}
          </h1>
          <p className="mt-4 text-gray-600 max-w-prose">{PROFILE.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border px-4 py-2 hover:bg-black hover:text-white transition-colors"
            >
              View GitHub
            </a>
            <a
              href={PROFILE.resumeUrl}
              className="inline-flex items-center justify-center rounded-lg border px-4 py-2 hover:bg-black hover:text-white transition-colors"
              download
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg border px-4 py-2 hover:bg-black hover:text-white transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="aspect-square w-full max-w-sm rounded-2xl border p-6">
            <div className="h-full w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500">
              <span className="text-center px-4">Your Photo / Logo</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const About = () => (
  <section id="about" aria-labelledby="about-title">
    <Container className="py-16">
      <SectionTitle
        title="About"
        subtitle={`${PROFILE.education} • Dean's List 2023-2024, 2024-2025`}
      />
      <div className="prose max-w-none text-gray-700">
        <p>
          I'm {PROFILE.name}, a Mechatronics Engineering student at Rochester Institute of Technology (RIT), 
          graduating in May 2027. I specialize in robotics, automation, and embedded systems—building intelligent 
          machines that bridge mechanical design, electronics, and software.
        </p>
        <p className="mt-4">
          My hands-on experience spans PLC programming (Allen-Bradley/Siemens), robotic arm automation with ABB RAPID, 
          pneumatic/hydraulic control systems, and Python-based simulation tools. I've optimized robot cycle times by 25%, 
          reduced simulation setup by 60%, and designed safety-critical control logic for industrial automation.
        </p>
        <p className="mt-4">
          Currently seeking a <strong>2025 summer-fall co-op</strong> where I can apply my robotics and automation expertise 
          to real-world engineering challenges. Let's build something impactful together.
        </p>
      </div>
    </Container>
  </section>
);

const ProjectCard = ({ p }) => (
  <article className="rounded-2xl border p-5 hover:shadow-md transition-shadow">
    <h3 className="font-semibold text-lg">{p.title}</h3>
    <p className="mt-2 text-sm text-gray-700">{p.description}</p>
    <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Technologies used">
      {p.stack.map((t) => (
        <span key={t} className="text-xs px-2 py-1 rounded-full border bg-gray-50">
          {t}
        </span>
      ))}
    </div>
    <div className="mt-4 flex gap-3">
      <a
        href={p.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline hover:opacity-80 transition-opacity"
      >
        GitHub
      </a>
      {p.demo && (
        <a
          href={p.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:opacity-80 transition-opacity"
        >
          Live Demo
        </a>
      )}
    </div>
  </article>
);

const Projects = () => (
  <section id="projects" aria-labelledby="projects-title">
    <Container className="py-16">
      <SectionTitle title="Projects" subtitle="A few things I'm proud of." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Container>
  </section>
);

const Experience = () => (
  <section id="experience" aria-labelledby="experience-title">
    <Container className="py-16">
      <SectionTitle title="Experience" subtitle="Roles, clubs, and teams." />
      <div className="space-y-6">
        {EXPERIENCE.map((e) => (
          <article key={e.org} className="rounded-2xl border p-5">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h3 className="font-semibold">{e.role}</h3>
                <p className="text-sm text-gray-600">{e.org}</p>
              </div>
              <time className="text-sm text-gray-500">{e.time}</time>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Container>
  </section>
);

const Skills = () => (
  <section id="skills" aria-labelledby="skills-title">
    <Container className="py-16">
      <SectionTitle title="Skills" subtitle="A condensed snapshot." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div key={group} className="rounded-2xl border p-5">
            <h3 className="font-semibold">{group}</h3>
            <ul className="mt-3 space-y-1 text-sm text-gray-700">
              {items.map((it) => (
                <li key={it}>• {it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const Contact = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nReply to: ${formData.email}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client...");
    setTimeout(() => setStatus(""), 3000);
  }, [formData]);

  return (
    <section id="contact" aria-labelledby="contact-title">
      <Container className="py-16">
        <SectionTitle title="Contact" subtitle="Let's build something." />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium block mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium block mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition resize-vertical"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-lg border px-4 py-2 hover:bg-black hover:text-white transition-colors font-medium"
              >
                Send Message
              </button>
              {status && (
                <p className="text-sm text-green-600" role="status" aria-live="polite">
                  {status}
                </p>
              )}
            </div>
          </div>
          <div className="rounded-2xl border p-6 text-sm text-gray-700">
            <p>
              Prefer email? Reach me at{" "}
              <a className="underline hover:opacity-80 transition-opacity" href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </a>
              .
            </p>
            <p className="mt-2">
              Also on{" "}
              <a
                className="underline hover:opacity-80 transition-opacity"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              and{" "}
              <a
                className="underline hover:opacity-80 transition-opacity"
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t" role="contentinfo">
    <Container className="py-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
      <span>
        © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </span>
      <nav className="flex items-center gap-4" aria-label="Footer navigation">
        <a
          className="underline hover:opacity-80 transition-opacity"
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="underline hover:opacity-80 transition-opacity"
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="underline hover:opacity-80 transition-opacity"
          href="#/features"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = "/features";
          }}
        >
          Features
        </a>
      </nav>
    </Container>
  </footer>
);

const FeaturesPage = () => (
  <main className="pt-16">
    <Container className="py-16">
      <SectionTitle title="Optional Features" subtitle="Ideas to expand as your portfolio grows." />
      <ul className="list-disc pl-6 space-y-2 text-gray-700 max-w-3xl">
        <li>Dark/Light theme toggle with system preference detection</li>
        <li>Blog with MDX for project write‑ups, lab notes, and retrospectives</li>
        <li>Auto‑fetch GitHub repos and pin featured ones via GitHub API</li>
        <li>Embed RocketPy visualizations and run preset simulations</li>
        <li>Case‑study pages for PLC projects with diagrams and videos</li>
        <li>Resume JSON → auto‑rendered resume page + downloadable PDF</li>
        <li>Contact form via EmailJS / Formspree (no backend required)</li>
        <li>Privacy‑friendly analytics (Plausible/Umami)</li>
        <li>Project filtering by technology/category</li>
        <li>Animated scroll indicators and progress bars</li>
      </ul>
    </Container>
  </main>
);

function useHashRoute() {
  const getRoute = () => window.location.hash.replace(/^#/, "") || "/";
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return [route, setRoute];
}

export default function PortfolioApp() {
  const [route, setRoute] = useHashRoute();
  const isFeatures = route === "/features";

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar route={route} setRoute={setRoute} />
      {isFeatures ? (
        <FeaturesPage />
      ) : (
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}