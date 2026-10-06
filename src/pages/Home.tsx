import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Download,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Search,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

type WorkSample = {
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  proof: string;
  image: string;
  tags: string[];
};

const asset = {
  portrait: "/manus-storage/bernard-headshot-v2_d3e69da2.png",
  resume: "/manus-storage/Bernard_Missedja_Resume_8c6d5e94.pdf",
};

const workSamples: WorkSample[] = [
  {
    title: "Train-the-Trainer Program",
    client: "Gessner Engineering",
    year: "2024",
    category: "Learning & Training",
    description:
      "Designed and implemented a comprehensive program that gave engineering managers a shared, evidence-based method for turning subject-matter expertise into structured workplace training. The solution used ADDIE, active practice, facilitator tools, and multi-level evaluation to make knowledge transfer repeatable.",
    proof: "98.5% mastery rate · 25 managers · 6 learning modules",
    image:
      "/manus-storage/Bernard_Missedja_Train_the_Trainer_Case_Study-cover_6f0fbd7b.jpg",
    tags: ["ADDIE", "Needs analysis", "Facilitation", "Evaluation"],
  },
  {
    title: "Organizational Climate Survey",
    client: "C.C. Creations",
    year: "2024",
    category: "People Analytics",
    description:
      "Developed and analyzed a mixed-method organizational climate survey covering values, work environment, leadership, engagement, employee development, change, compensation, and retention. Findings were translated into practical recommendations for communication, career pathways, recognition, and manager development.",
    proof: "209 responses · 43 survey items · 10 climate dimensions",
    image:
      "/manus-storage/C.C.CreationsPresentation_Vr1-cover_7f47a808.jpg",
    tags: ["Survey design", "Jamovi", "Segmentation", "Engagement"],
  },
  {
    title: "Accelerator Physicist & Research Scientist Job Analysis",
    client: "Texas A&M Cyclotron Institute",
    year: "2023",
    category: "Talent Systems",
    description:
      "Conducted a comprehensive job analysis for accelerator physicist and research scientist positions using a sequential exploratory mixed-method approach. Interviews, observations, document analysis, and survey data were integrated to define work behaviors, critical tasks, KSAOs, and role requirements.",
    proof: "27 participants · 14 job clusters · KSAO linkage analysis",
    image: "/manus-storage/cyclotron-job-analysis-cover_f6bdd5a8.png",
    tags: ["Job analysis", "KSAO mapping", "Mixed methods"],
  },
  {
    title: "Case Manager Selection System",
    client: "Chad Jones Law",
    year: "2024",
    category: "Talent Systems",
    description:
      "Created a structured hiring framework tailored to the interpersonal, cultural, and role-specific demands of the Case Manager position. Deliverables included competency-based interview questions, a scoring rubric, assessment-vendor criteria, an improved exit survey, and a candidate-experience survey.",
    proof: "Structured interview · Linkage analysis · Candidate experience",
    image: "/manus-storage/CJL-CaseManager-cover_c34da3ea.jpg",
    tags: ["Selection", "Assessment", "Survey design"],
  },
  {
    title: "Leadership Assessment Toolkit",
    client: "Bolgiano Capital Management",
    year: "2024",
    category: "Leadership",
    description:
      "Created a psychometric-based leadership assessment framework using three validated measures and 360-degree feedback. Results were synthesized through the Assessment–Challenge–Support model into focused goals, stretch assignments, coaching resources, and an individual development plan.",
    proof: "3 validated assessments · 360° feedback · Development plan",
    image:
      "/manus-storage/leadership-assessment-cover-no-name_941e5e9a.png",
    tags: ["360 feedback", "Psychometrics", "Leadership"],
  },
  {
    title: "Certified Cocoa Employee Policy",
    client: "Kuapa Kokoo",
    year: "2020",
    category: "People Policy",
    description:
      "Translated ethical cocoa-certification commitments into a practical people-policy system spanning employment, rewards, conduct, safeguards, performance, complaints, records, and digital governance. The handbook gave managers and employees one consistent reference across a highly distributed cooperative.",
    proof: "97-page policy system · 57 societies · 1,200+ communities",
    image:
      "/manus-storage/Bernard_Missedja_Employee_Policy_Certified_Cocoa_Portfolio-cover_57dfc2eb.jpg",
    tags: ["Policy design", "Compliance", "Employee relations"],
  },
  {
    title: "Rural Support Training Systems",
    client: "TeleAgric & Telemedicine",
    year: "2020",
    category: "Learning & Training",
    description:
      "Designed connected training and operating systems for remote agricultural advice and telemedicine support. The work standardized communication, protocol use, specialist escalation, documentation, privacy, service-quality review, role practice, coaching, and refresher training for call-centre and field teams.",
    proof: "2 service systems · 100,000 farmers cited · 5-step workflow",
    image:
      "/manus-storage/Bernard_Missedja_TeleAgric_Telemedicine_Training_Design_Final-cover_1057f295.jpg",
    tags: ["Service design", "SOPs", "Workplace learning", "Data governance"],
  },
  {
    title: "AWL Reporting Dashboard",
    client: "Texas A&M Transportation Institute",
    year: "2024",
    category: "People Analytics",
    description:
      "Developed a reporting dashboard that streamlined workflow monitoring across 66 programs. The solution combined operational analytics, compliance tracking, standardized reporting, and decision-ready views to reduce manual processing and improve visibility for program leaders.",
    proof: "85% faster workflow · 66 programs · 25% compliance improvement",
    image: "/manus-storage/dashboard-project_a2d99683.webp",
    tags: ["Power BI", "Excel", "Workflow analytics", "Compliance"],
  },
  {
    title: "Computer Skills Training Analysis",
    client: "Applied Research Study",
    year: "2024",
    category: "Learning & Training",
    description:
      "Conducted a statistical validation study to determine whether computer-skills training produced sustained improvement. Pre-training, post-training, and one-month follow-up scores were compared to establish the pattern, significance, and practical magnitude of learning gains.",
    proof: "80 participants · 47% improvement · Significant time effect",
    image: "/manus-storage/training-model_1527c7e7.webp",
    tags: ["SPSS", "R", "Evaluation", "Training transfer"],
  },
  {
    title: "Customer Service Training Program",
    client: "Applied Research Study",
    year: "2024",
    category: "Learning & Training",
    description:
      "Evaluated a progressive three-session customer-service program using repeated performance measures. Results showed continuous improvement across sessions, supporting a sequenced design in which practice, feedback, and reinforcement build capability over time.",
    proof: "143% improvement · 3 sessions · Large effect size",
    image: "/manus-storage/customer-service-development_aa9f385e.webp",
    tags: ["Program evaluation", "Customer service", "SPSS"],
  },
];

const capabilities = [
  {
    icon: BarChart3,
    number: "01",
    title: "People analytics",
    text: "Turn workforce data into decisions through survey design, dashboards, segmentation, and statistical analysis.",
  },
  {
    icon: BookOpenCheck,
    number: "02",
    title: "Learning systems",
    text: "Build practical learning journeys with ADDIE, 4C/ID, PBL, ICAP, assessment, and transfer in mind.",
  },
  {
    icon: UsersRound,
    number: "03",
    title: "Talent & leadership",
    text: "Clarify roles, improve selection, assess leaders, and design focused development experiences.",
  },
  {
    icon: BriefcaseBusiness,
    number: "04",
    title: "Organization development",
    text: "Connect employee experience, policy, culture, and operating systems to sustainable performance.",
  },
];

const experience = [
  {
    period: "2025 — Present",
    role: "HR Specialist, Training & Workforce Analytics",
    company: "Bezaleel Workmanship",
    detail:
      "Designs structured onboarding, role-based training, digital modules, assessments, and workforce reporting for leadership decision support.",
  },
  {
    period: "2023 — 2024",
    role: "Graduate HR Analyst",
    company: "Texas A&M Transportation Institute",
    detail:
      "Built training materials, SOPs, assessments, and analytics dashboards supporting readiness, mastery, and compliance.",
  },
  {
    period: "2014 — 2023",
    role: "HR Manager",
    company: "Kuapa Kokoo Cooperative Union Ltd.",
    detail:
      "Led organization-wide onboarding, training, policy, and employee-relations initiatives across 57 districts and 4,506 employees.",
  },
  {
    period: "Nov 2012 — Sep 2014 · 1 yr 11 mos",
    role: "Business Development Manager",
    company: "Mventurian Global LLC",
    meta: "Full-time · Ghana · On-site",
    detail:
      "Developed and negotiated business proposals, forged strategic partnerships, and represented multinational business interests to government ministries and departments. Conducted industry research, identified innovative opportunities, and prospected potential deals to support organizational growth.",
    skills: ["Contract Negotiation", "Business Development"],
  },
  {
    period: "Jul 2011 — Oct 2012 · 1 yr 4 mos",
    role: "Program Manager",
    company: "SFLIG",
    meta: "Full-time · Adum–Kumasi, Ghana · On-site",
    detail:
      "Coordinated volunteers to research, analyze, and present findings for International Day Against Child Labor with support from the Department of Social Welfare and Ghana Education Service. Trained interns in community-entry techniques and drafted a sustainability plan that expanded the project portfolio.",
    skills: ["Fundraising", "Project Management"],
  },
  {
    period: "Oct 2010 — Jul 2011 · 10 mos",
    role: "Administrative Assistant",
    company: "Kumasi Metropolitan Assembly / RCC",
    meta: "Contract · Ghana · On-site",
    detail:
      "Collected and analyzed youth-employment data for strategic planning, prepared field reports and briefs, developed practical responses to project challenges, and facilitated training for field staff on project scope and objectives.",
    skills: ["Administration", "Data Analysis"],
  },
];

const education = [
  ["MSc", "Industrial-Organizational Psychology", "Texas A&M University"],
  ["MSc", "Development Management", "Kwame Nkrumah University of Science & Technology"],
  ["BA", "Sociology & Social Work", "Kwame Nkrumah University of Science & Technology"],
];

const navItems = [
  ["About", "#about"],
  ["Expertise", "#expertise"],
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

const categories = [
  "All work",
  "Learning & Training",
  "People Analytics",
  "Talent Systems",
  "Leadership",
  "People Policy",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  eyebrow,
  title,
  copy,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  invert?: boolean;
}) {
  return (
    <div className={`section-heading ${invert ? "section-heading--invert" : ""}`}>
      <div className="section-kicker">
        <span />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <>
      <div className="quote-bar">“Better work begins with better systems.”</div>
      <header className="site-header">
        <div className="shell nav-shell">
          <a className="brand" href="#top" aria-label="Bernard Missedja home">
            <span className="brand-mark">BM</span>
            <span>
              <strong>Bernard Missedja</strong>
              <small>I/O Psychology</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
            <a className="nav-resume" href={asset.resume} target="_blank" rel="noreferrer">
              Résumé <ArrowUpRight size={14} />
            </a>
          </nav>
          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <AnimatePresence>
          {open ? (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              {navItems.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>
                  {label} <ChevronRight size={16} />
                </a>
              ))}
              <a href={asset.resume} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                Résumé <ArrowUpRight size={16} />
              </a>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grain" />
      <div className="shell hero-grid">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeUp} className="hero-eyebrow">
            Industrial-Organizational Psychology · Learning & OD
          </motion.div>
          <motion.h1 variants={fadeUp}>
            Designing systems where <em>people</em> and performance grow together.
          </motion.h1>
          <motion.p variants={fadeUp} className="hero-lede">
            I’m <strong>Bernard Missedja</strong>, an I/O psychology professional translating behavioral science, workforce data, and learning design into practical organizational results.
          </motion.p>
          <motion.div variants={fadeUp} className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowDown size={17} />
            </a>
            <a className="button button-ghost" href={asset.resume} target="_blank" rel="noreferrer">
              View résumé <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="portrait-stage"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="portrait-frame">
            <img src={asset.portrait} alt="Bernard Missedja" />
          </div>
          <div className="portrait-caption">
            <span>Based in Texas</span>
            <strong>Evidence into action.</strong>
          </div>
          <div className="portrait-orbit" aria-hidden="true">
            BM
          </div>
        </motion.div>
      </div>
      <div className="shell impact-strip" aria-label="Selected impact metrics">
        {[
          ["7+", "Years across HR, analytics & OD"],
          ["4,506", "Employees supported across 57 districts"],
          ["98.5%", "Training mastery achieved"],
          ["22%", "Improvement in post-training proficiency"],
        ].map(([value, label]) => (
          <div className="impact-item" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section-light">
      <div className="shell about-grid">
        <motion.div
          className="about-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <span className="section-index">01 / ABOUT</span>
          <h2>Behavioral science with an operator’s perspective.</h2>
        </motion.div>
        <motion.div
          className="about-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.p variants={fadeUp} className="about-lead">
            I bring more than seven years of experience across HR management, workforce analytics, organizational development, and learning design.
          </motion.p>
          <motion.p variants={fadeUp}>
            My work connects the rigor of Industrial-Organizational Psychology with the practical realities of leaders, employees, and distributed operations. I’ve designed leadership assessments, role-based training, competency frameworks, surveys, policies, and decision-ready dashboards for organizations in the United States and Ghana.
          </motion.p>
          <motion.div variants={fadeUp} className="about-links">
            <a href="mailto:bmissedja@gmail.com">
              <Mail size={17} /> bmissedja@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/bernard-missedja-523b2331" target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn
            </a>
            <span>
              <MapPin size={17} /> Bryan, Texas
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="section section-ink">
      <div className="shell">
        <SectionHeading
          eyebrow="What I do"
          title="People systems built to be used—not shelved."
          copy="Research, design, and implementation come together in work that is rigorous enough for decision-makers and practical enough for the people doing the work."
          invert
        />
        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, number, title, text }, index) => (
            <motion.article
              className="capability-card"
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="capability-top">
                <Icon size={24} />
                <span>{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
        <div className="tool-row">
          {[
            "Power BI",
            "Tableau",
            "R",
            "SPSS",
            "Python",
            "SQL",
            "Qualtrics",
            "Workday",
            "Advanced Excel",
          ].map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkLibrary() {
  const [category, setCategory] = useState("All work");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return workSamples.filter((sample) => {
      const categoryMatch = category === "All work" || sample.category === category;
      const text = [sample.title, sample.client, sample.description, sample.category, ...sample.tags]
        .join(" ")
        .toLowerCase();
      return categoryMatch && (!normalized || text.includes(normalized));
    });
  }, [category, query]);

  return (
    <section id="work" className="section section-light library-section">
      <div className="shell">
        <div className="library-head">
          <SectionHeading
            eyebrow="Work sample library"
            title="Projects, methods & measurable outcomes."
            copy="Browse one consolidated summary for each project, including the challenge, approach, and evidence of impact."
          />
          <div className="search-box">
            <Search size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search work samples"
              aria-label="Search work samples"
            />
          </div>
        </div>
        <div className="filter-row" aria-label="Filter work samples">
          {categories.map((item) => (
            <button
              type="button"
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>

        <motion.div layout className="library-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((sample) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="sample-card"
                key={sample.title}
              >
                <div className="sample-visual">
                  <img src={sample.image} alt={`${sample.title} cover`} />
                  <span>Project summary</span>
                </div>
                <div className="sample-content">
                  <div className="sample-overline">
                    {sample.client} · {sample.year}
                  </div>
                  <h3>{sample.title}</h3>
                  <p>{sample.description}</p>
                  <div className="project-proof">{sample.proof}</div>
                  <div className="tag-list">
                    {sample.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 ? (
          <div className="empty-state">No work samples match that search.</div>
        ) : null}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section section-paper">
      <div className="shell experience-layout">
        <div>
          <SectionHeading
            eyebrow="Professional journey"
            title="Experience shaped across operations, research, and design."
          />
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-marker" />
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                {"meta" in item && item.meta ? <div className="timeline-meta">{item.meta}</div> : null}
                <p>{item.detail}</p>
                {"skills" in item && item.skills ? (
                  <div className="timeline-skills">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
        <aside className="credentials-panel">
          <div className="credentials-icon">
            <GraduationCap size={28} />
          </div>
          <span className="section-index">EDUCATION</span>
          <h3>Two disciplines.<br />One systems perspective.</h3>
          <div className="degree-list">
            {education.map(([degree, field, institution]) => (
              <div key={field}>
                <strong>{degree} · {field}</strong>
                <span>{institution}</span>
              </div>
            ))}
          </div>
          <div className="certifications">
            <span>Selected credentials</span>
            {["Human Resources Analytics · UC Irvine", "Foundations of Project Management · Google", "SQL for Data Science · edX", "Programming Methodologies · Stanford"].map((item) => (
              <div key={item}>
                <CheckCircle2 size={16} /> {item}
              </div>
            ))}
          </div>
          <a className="button button-primary button-full" href={asset.resume} target="_blank" rel="noreferrer">
            <Download size={17} /> Download résumé
          </a>
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-orbit" aria-hidden="true" />
      <div className="shell contact-grid">
        <div>
          <div className="section-kicker section-kicker--light">
            <span /> Let’s work together
          </div>
          <h2>Bring clarity to your next people challenge.</h2>
        </div>
        <div className="contact-copy">
          <p>
            I’m interested in roles and collaborations spanning people analytics, organizational development, learning design, leadership assessment, and talent systems.
          </p>
          <a className="contact-email" href="mailto:bmissedja@gmail.com">
            <span>Start a conversation</span>
            <strong>bmissedja@gmail.com</strong>
            <ArrowUpRight size={24} />
          </a>
          <div className="contact-details">
            <a href="tel:+16146006107">+1 (614) 600-6107</a>
            <span>Bryan, Texas</span>
            <a href="https://www.linkedin.com/in/bernard-missedja-523b2331" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="site-page">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <WorkLibrary />
        <Experience />
        <Contact />
      </main>
      <footer>
        <div className="shell footer-inner">
          <div className="brand brand--footer">
            <span className="brand-mark">BM</span>
            <span>
              <strong>Bernard Missedja</strong>
              <small>Industrial-Organizational Psychology</small>
            </span>
          </div>
          <p>© {new Date().getFullYear()} Bernard Missedja. Built around evidence, clarity, and action.</p>
          <a href="#top" aria-label="Back to top">
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
      </footer>
    </div>
  );
}
