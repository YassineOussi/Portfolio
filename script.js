// Traductions anglaises. Le texte français est déjà dans index.html.
const EN = {
  "skip": "Skip to content",
  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.contact": "Contact",
  "hero.eyebrow": "Open to opportunities · Rabat-Salé · Hybrid or remote",
  "hero.role": "Full-stack .NET software engineer",
  "hero.lead": "I build and evolve reliable business applications, from requirements analysis to production, on modern architectures as well as on existing solutions to modernize.",
  "hero.cv": "Download my resume",
  "hero.contact": "Contact me",
  "stats.years": "years of .NET experience",
  "stats.companies": "companies: Devoteam and Involys",
  "stats.tests": "automated tests written",
  "stats.lang": "working languages",
  "about.title": "About",
  "about.p1": "State engineer in computer science (ENSA Kénitra), I have been working for more than two years on .NET web applications, on both the server side and the user interface.",
  "about.p2": "What defines me: rigor, a strong focus on quality and reliability, and the ability to quickly understand a business domain to deliver the right solution. I enjoy working in agile teams and delivering useful, well-tested and maintainable features.",
  "about.v1t": "Reliability",
  "about.v1": "Centralized, tested business rules, so results are correct everywhere.",
  "about.v2t": "Performance",
  "about.v2": "Measure before optimizing: queries, reports, screens.",
  "about.v3t": "End to end",
  "about.v3": "From analysis to production, from back-end to user interface.",
  "exp.title": "Experience",
  "exp.dev.role": ".NET Software Engineer (consultant)",
  "exp.dev.place": "Rabat, hybrid",
  "exp.dev.date": "Feb 2026 – present",
  "exp.dev.b1": "Full-stack development of a business platform used by a branch network, within an Agile team.",
  "exp.dev.b2": "End-to-end ownership of features, from requirements analysis to production.",
  "exp.dev.b3": "Operation traceability and accurate amounts: centralized calculation rules and more than 290 automated tests.",
  "exp.dev.b4": "Performance improvements on consultation screens, on a modern microservices architecture.",
  "exp.inv.role": ".NET / Angular Software Engineer",
  "exp.inv.date": "Aug 2024 – Jan 2026",
  "exp.inv.b1": "Evolution, maintenance and per-customer customization of business software sold to several customers.",
  "exp.inv.b2": "Migration of an existing module to a newer version, compatible with two databases.",
  "exp.inv.b3": "Performance improvements on queries and reports.",
  "exp.inv.b4": "Involved in the full lifecycle: analysis, development, testing and release.",
  "exp.dxc.role": "Final-year internship (engineering degree project)",
  "exp.dxc.date": "Feb – Jun 2024",
  "exp.dxc.b1": "Design and development of a dynamic workflow management platform.",
  "exp.stages.role": "Internships",
  "exp.stages.b1": "Modernization of an API towards a cloud (serverless) architecture and job offer search.",
  "exp.stages.b2": "Evolution of a supply-chain ERP, and a medical appointment booking platform.",
  "skills.title": "Skills",
  "skills.back": "Back-end",
  "skills.front": "Front-end",
  "skills.arch": "Architecture",
  "skills.data": "Data and reporting",
  "skills.proc": "Stored procedures and triggers",
  "skills.devops": "DevOps",
  "skills.quality": "Quality and methods",
  "skills.review": "Code review",
  "proj.title": "Projects",
  "proj.pfe.k": "Engineering degree project",
  "proj.pfe.t": "Dynamic workflow engine",
  "proj.pfe.d": "A platform where users model, run and track their business processes without rebuilding an application: BPMN modeling, dynamic forms and change history.",
  "proj.ms.k": "Personal project",
  "proj.ms.t": "Microservices social network",
  "proj.ms.d": "Users, posts and a personalized feed, with an API gateway, service discovery and authentication.",
  "proj.jobs.k": "Personal project",
  "proj.jobs.t": "Moroccan job offer aggregator",
  "proj.jobs.d": "Automatic collection of job offers from several websites, a search API and a browsing interface.",
  "proj.code": "View on GitHub →",
  "edu.title": "Education",
  "edu.degree": "State engineering degree in computer science",
  "edu.lang": "Languages",
  "edu.langs": "Arabic (native) · French (professional) · English (professional)",
  "contact.title": "Let's work together",
  "contact.lead": "I am looking for a .NET developer role in Rabat-Salé, hybrid or remote. The easiest way to reach me is by email or LinkedIn.",
  "contact.mail": "Send me an email",
  "contact.li": "My LinkedIn profile",
  "footer": "Salé, Morocco"
};

const nodes = document.querySelectorAll("[data-i18n]");
const FR = {};
nodes.forEach(el => { FR[el.dataset.i18n] = el.textContent; });

function store(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* stockage indisponible */ }
}
function read(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

function setLang(lang) {
  const dict = lang === "en" ? EN : FR;
  nodes.forEach(el => {
    const text = dict[el.dataset.i18n];
    if (text) el.textContent = text;
  });
  document.documentElement.lang = lang;
  document.getElementById("lang-toggle").textContent = lang === "en" ? "FR" : "EN";
  document.title = lang === "en"
    ? "Yassine Oussi | Full-stack .NET Software Engineer"
    : "Yassine Oussi | Ingénieur développeur .NET full-stack";
  store("lang", lang);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  store("theme", theme);
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  setLang(document.documentElement.lang === "en" ? "fr" : "en");
});

document.getElementById("theme-toggle").addEventListener("click", () => {
  const current = document.documentElement.dataset.theme
    || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  setTheme(current === "dark" ? "light" : "dark");
});

const savedTheme = read("theme");
if (savedTheme) setTheme(savedTheme);

// Français par défaut ; ?lang=en dans l'URL force l'anglais (pratique pour un lien envoyé à l'étranger).
const urlLang = new URLSearchParams(location.search).get("lang");
setLang(urlLang === "en" || urlLang === "fr" ? urlLang : (read("lang") || "fr"));

document.getElementById("year").textContent = new Date().getFullYear();
