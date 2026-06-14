import { Github, Linkedin, Mail, Phone, MapPin, Server, Brain, Code, Briefcase, GraduationCap, ExternalLink, Languages, Award } from 'lucide-react';
import profileImg from './assets/profile.jpg';

function App() {
  // --- DATA STRUCTURES (Culled from your CV) ---
  const skills = {
    frontend: ["React.js", "Redux", "TypeScript", "Material UI", "Tailwind CSS", "Styled Components"],
    backend: ["Node.js", "Express.js", "REST APIs", "Python"],
    databases: ["PostgreSQL", "MongoDB", "MySQL"],
    devops: ["Git", "GitHub", "AWS Fundamentals", "Linux", "Vercel", "Kubernetes", "Docker", "Terraform"],
    ai: ["LangChain", "LangGraph", "RAG", "Model Context Protocol (MCP)"]
  };

  const experience = [
    {
      role: "Full-Stack Web Development Trainer",
      company: "Digital Career Institute (DCI)",
      location: "Germany",
      period: "2022 - 2026",
      bullets: [
        "Delivered comprehensive training to over 100 participants in Full-Stack Web Development.",
        "Taught HTML, CSS, JavaScript, React.js, and Node.js with high engagement.",
        "Designed and conducted project-based learning modules, mimicking real-world production environments.",
        "Conducted thorough code reviews, provided targeted mentoring, and prepared learners for technical interviews."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "CDAC India (Centre for Development of Advanced Computing)",
      location: "Bangalore, India",
      period: "Prior Experience",
      bullets: [
        "Developed and maintained scalable web applications using React.js, Node.js, and core JavaScript.",
        "Created responsive, pixel-perfect user interfaces leveraging modern HTML, CSS, and styling libraries.",
        "Designed, optimized, and integrated robust REST APIs for reliable frontend-backend communication."
      ]
    }
  ];

  // Placeholder projects - Update the github/live links to your repository URLs
  const projects = [
    {
      title: "AI-Powered Agent Framework",
      description: "An intelligent multi-agent orchestration system built to manage tool-enabled systems using advanced context protocols.",
      tech: ["LangGraph", "FastAPI", "Python", "Docker"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Cloud-Native Infrastructure Deployment",
      description: "Declarative Terraform scripts and Kubernetes configurations for deploying secure, high-availability microservices on AWS.",
      tech: ["Terraform", "Kubernetes", "AWS", "Docker"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Enterprise RAG Pipeline",
      description: "A production-ready Retrieval-Augmented Generation pipeline featuring context vector embeddings and optimized retrieval algorithms.",
      tech: ["LangChain", "Node.js", "PostgreSQL", "React.js"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Upasana Tailor 
          </span>
          <div className="flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#languages" className="hover:text-cyan-400 transition-colors">Languages</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      {/* --- HERO / ABOUT SECTION --- */}
      <header id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Profile Image & Quick Links */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-56 h-56 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/10">
              <img 
                src={profileImg} 
                alt="Upasana Tailor" 
                className="w-full h-full object-cover rounded-full bg-slate-900"
              />
            </div>
            
            {/* Contact Quick Links */}
            <div className="flex flex-col space-y-2 text-sm text-slate-400 items-center md:items-start w-full px-4">
              <div className="flex items-center gap-2"><MapPin size={16} className="text-cyan-400"/> Landsberg am Lech, Germany</div>
              <div className="flex items-center gap-2"><Mail size={16} className="text-cyan-400"/> upasanatailor90@gmail.com</div>
              <div className="flex items-center gap-2"><Phone size={16} className="text-cyan-400"/> +4915225419624</div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/upasana-tailor-b24539152/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Profile Intro Bio */}
          <div className="md:col-span-2 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Upasana Tailor
              </h1>
              <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wide">
                FullStack Trainer & Developer(AI & Cloud Infrastructure)
              </p>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-2xl text-base md:text-lg">
              Full-Stack Software Engineer with experience building modern web applications, AI-powered solutions, and developer platforms. Passionate about designing intelligent systems that combine robust software engineering practices with large language models, structured agent orchestration, and cloud-native infrastructure.
            </p>
            <div className="pt-2">
              <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:opacity-95 transition-opacity shadow-lg shadow-cyan-500/20">
                View My Work
              </a>
            </div>
          </div>

        </div>
      </header>

      <hr className="border-slate-900 max-w-6xl mx-auto" />

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-2 mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
            <Code className="text-cyan-400" /> Technical Expertise
          </h2>
          <p className="text-slate-400 text-sm">Tools, languages, and frameworks I use to bring production systems to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* AI Frameworks */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-cyan-400" size={24} />
              <h3 className="font-semibold text-white text-lg">AI & Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.ai.map((s, idx) => <span key={idx} className="px-3 py-1 text-xs font-medium rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800/50">{s}</span>)}
            </div>
          </div>

          {/* DevOps & Infrastructure */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Server className="text-blue-400" size={24} />
              <h3 className="font-semibold text-white text-lg">DevOps & Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.devops.map((s, idx) => <span key={idx} className="px-3 py-1 text-xs font-medium rounded-md bg-blue-950 text-blue-300 border border-blue-800/50">{s}</span>)}
            </div>
          </div>

          {/* Frontend, Backend & DB combined */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-indigo-400" size={24} />
              <h3 className="font-semibold text-white text-lg">Full-Stack Stack</h3>
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {[...skills.frontend.slice(0, 3), ...skills.backend.slice(0, 2), ...skills.databases.slice(0, 2)].map((s, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700">{s}</span>
                ))}
                <span className="text-xs text-slate-500 self-center pl-1">+ more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-900 max-w-6xl mx-auto" />

      {/* --- LANGUAGES SECTION --- */}
      <section id="languages" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-2 mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
            <Languages className="text-cyan-400" /> Language Proficiency
          </h2>
          <p className="text-slate-400 text-sm">Languages I communicate in professionally and personally.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* German */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white font-semibold text-lg">German</p>
                <p className="text-slate-400 text-xs mt-0.5">Deutsch</p>
              </div>
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50">B2 Certified</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full" style={{ width: '65%' }} />
            </div>
            <p className="text-slate-500 text-xs mt-2">Upper Intermediate</p>
          </div>

          {/* English */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white font-semibold text-lg">English</p>
                <p className="text-slate-400 text-xs mt-0.5">English</p>
              </div>
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-950 text-blue-300 border border-blue-800/50">C1</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1.5 rounded-full" style={{ width: '85%' }} />
            </div>
            <p className="text-slate-500 text-xs mt-2">Advanced</p>
          </div>

          {/* Hindi */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white font-semibold text-lg">Hindi</p>
                <p className="text-slate-400 text-xs mt-0.5">हिन्दी</p>
              </div>
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/50">Native</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full" style={{ width: '100%' }} />
            </div>
            <p className="text-slate-500 text-xs mt-2">Native Speaker</p>
          </div>
        </div>
      </section>

      <hr className="border-slate-900 max-w-6xl mx-auto" />

      {/* --- CERTIFICATIONS SECTION --- */}
      <section id="certifications" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-2 mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
            <Award className="text-cyan-400" /> Certifications & Training
          </h2>
          <p className="text-slate-400 text-sm">Officially certified to train and mentor developers in industry-standard technologies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Stack Trainer */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-800/40 group-hover:border-cyan-500/50 transition-all">
                <Code className="text-cyan-400" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="text-white font-bold text-lg">Certified Full-Stack Developer Trainer</h3>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50 uppercase tracking-wide">Certified</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">Digital Career Institute (DCI) · Germany</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Certified to design and deliver professional training in HTML, CSS, JavaScript, React.js, Node.js, and modern full-stack web development practices.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {["React.js", "Node.js", "JavaScript", "HTML/CSS", "REST APIs"].map((t, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] font-medium text-slate-400 bg-slate-800/60 rounded border border-slate-700">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* DevOps Trainer */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-950 border border-blue-800/40 group-hover:border-blue-500/50 transition-all">
                <Server className="text-blue-400" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="text-white font-bold text-lg">Certified DevOps Trainer</h3>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-950 text-blue-300 border border-blue-800/50 uppercase tracking-wide">Certified</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">Digital Career Institute (DCI) · Germany</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Certified to train professionals in DevOps principles, cloud infrastructure, containerisation, and CI/CD pipelines using industry-standard tooling.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"].map((t, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] font-medium text-slate-400 bg-slate-800/60 rounded border border-slate-700">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-900 max-w-6xl mx-auto" />

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-2 mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
            <Briefcase className="text-cyan-400" /> Work History
          </h2>
        </div>

        <div className="relative border-l border-slate-800 ml-4 space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute w-3 h-3 bg-slate-950 border-2 border-cyan-400 rounded-full -left-[7px] top-1.5 group-hover:bg-cyan-400 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                  <p className="text-slate-300 font-medium text-sm">{exp.company} <span className="text-slate-500">• {exp.location}</span></p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 max-w-fit rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 text-slate-400 text-sm max-w-3xl list-disc list-inside">
                {exp.bullets.map((b, bIdx) => <li key={bIdx} className="leading-relaxed">{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-slate-900 max-w-6xl mx-auto" />

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-2 mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
            <Server className="text-cyan-400" /> Featured Projects
          </h2>
          <p className="text-slate-400 text-sm">A look into some architectural and automation systems I have deployed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:scale-[1.01] transition-all">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white tracking-tight">{proj.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tech.map((t, tIdx) => <span key={tIdx} className="px-2 py-0.5 text-[10px] font-medium text-slate-400 bg-slate-800/60 rounded">{t}</span>)}
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-6 text-xs font-semibold text-slate-400">
                <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                  <Github size={14} /> Repository
                </a>
                <a href={proj.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- EDUCATION & OTHER INFO FOOTER --- */}
      <footer className="bg-slate-950 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-500">
          <div className="flex gap-3 items-start">
            <GraduationCap size={18} className="text-slate-400 mt-0.5" />
            <div>
              <p className="font-bold text-slate-300 text-sm uppercase tracking-wider mb-1">Education</p>
              <p className="font-semibold text-slate-400">Bachelor in Electronics and Communication</p>
              <p>Rajasthan Technical University</p>
            </div>
          </div>
          <div className="md:text-right flex flex-col justify-end">
            <p>© {new Date().getFullYear()} Upasana Tailor. Built with React & Tailwind CSS.</p>
            <p className="mt-1">Languages: English (C1) • German (B2) • Hindi (Native)</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;