import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Menu,
  X,
  ExternalLink,
  MapPin,
  Calendar,
} from "lucide-react";
import cryptojs from "crypto-js"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "summary",
        "experience",
        "projects",
        "skills",
        "education",
        "certifications",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  // const handleResumeDownload = () => {
  //   window.open(
  //     "https://drive.google.com/file/d/1f4ST4xz4fDMPV6njfmovSoTSVaDcLBt-/view?usp=drivesdk",
  //     "_blank",
  //   );
  // };
 
  const handleResumeDownload = () => {
  window.open("/Shiva_Prasad_Naroju_Resume.pdf", "_blank");
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "summary", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
  ];

  return (
    <div className="bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-semibold text-lg">Shiva Prasad Naroju</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-100 ripple ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors ripple"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ripple ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Mobile view (2-line heading) */}
          <h1 className="block sm:hidden text-3xl font-light mb-6 leading-tight">
            Hey there, I am <br />
            <span className="font-medium">Shiva Prasad Naroju</span>
          </h1>

          {/* Tablet & Desktop view (1-line heading) */}
          <h1 className="hidden sm:block text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Hey there... <br />I'm<span className="font-medium"> Shiva Prasad Naroju</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Generative AI Engineer passionate about building intelligent
            systems that solve real-world problems
          </p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          {/* Contact Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/shiva-Prasad-Naroju/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-105 ripple"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shiva-prasad-naroju-4772a6184/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-all duration-200 hover:scale-105 ripple"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shivanaroju26@gmail.com"
              className="p-3 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 transition-all duration-200 hover:scale-105 ripple"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Resume Download Button */}
          <button
            onClick={handleResumeDownload}
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-105 ripple shadow-lg hover:shadow-xl"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </button>
        </div>
      </div>
    </section>

    {/* Summary Section */}
    <section
      id="summary"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden"
    >
      {/* Background photo with subtle overlay
      <div className="absolute inset-0 opacity-5">
        <img 
          src="your-image-url-here" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-light mb-12 text-center animate-fade-in">
          About Me
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Profile photo card */}
          <div className="lg:col-span-1 animate-fade-up">
            <div className="sticky top-8">
              <div className="relative group">
                {/* Glowing background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/30">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                    <img 
                    src="/profile.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  </div>


                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Engineer</h3>

                    {/* Skill indicators */}
                    <div className="flex justify-center gap-2 mt-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse-slow"></div>
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-2 animate-fade-up-delay">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 transition-transform duration-500 hover:scale-[1.02]">
              <p className="text-lg leading-relaxed text-gray-700">
                I am an <span className="font-semibold">AI engineer</span> with hands-on expertise in advanced <span className="font-semibold">RAG pipelines, AI Agents</span>, and production-ready AI applications. Skilled in LLMs, semantic search, and vector databases. <span className="font-semibold">Optimized RAG workflows</span> to reduce hallucinations and boost domain accuracy.
                <br /><br />
                The moment I realized AI could solve real problems instead of just answering casual questions, that's when everything clicked.
                I dove headfirst into <span className="font-semibold">Machine Learning, Deep Learning, Generative AI, and Agentic AI</span>, not because the technology was cool (though it definitely is), but because I saw its potential to genuinely <span className="font-semibold">solve real-world problems</span>.
                <br /><br />
                Today, I focus on building <span className="font-semibold">AI that matters</span> and solving problems. I'm particularly passionate about healthcare AI, creating solutions that help doctors work faster when every second counts. 
                There's nothing quite like knowing your code could help save a life. The way I see it: every project should <span className="font-semibold">create impact</span>—whether it saves a life, saves time, or simply makes someone’s day better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      
      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-blue-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light mb-12 text-center">
            Experience
          </h2>
          <div className="animate-on-scroll">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    AI Developer Intern
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Viswam AI (Open-Source)
                  </p>
                </div>
                <div className="flex items-center text-gray-500 text-sm mt-2 sm:mt-0">
                  <Calendar size={16} className="mr-1" />
                  May 2025 – July 2025
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contributed to Telugu LLM development through cultural data
                  collection and corpus building.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Designed a RAG-powered web app to crowdsource Vaasthu
                  knowledge while providing real-time AI guidance, improving
                  domain adaptation and cultural alignment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-green-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Vaasthu Vision AI 🏡",
                description:
                  "Intelligent GenAI system delivering reliable Vaasthu Shastra guidance through advanced query routing and domain-specific knowledge retrieval.",
                links: [
                  {
                    label: "View Project",
                    url: "https://github.com/Shiva-Prasad-Naroju/Vaasthu-Vision-AI-Version1",
                    color:
                      "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100",
                    icon: <Github size={14} className="mr-1.5" />,
                  },
                  {
                    label: "Output Video",
                    url: "https://www.linkedin.com/posts/shiva-prasad-naroju-4772a6184_genai-artificialintelligence-machinelearning-activity-7353397783669731329-wMpR?utm_source=share&utm_medium=member_desktop&rcm=ACoAACt4LRsBQ69c1XBIukR81m4Iy7dej5736CU",
                    color: "bg-blue-100 text-blue-600 hover:bg-blue-200",
                    icon: <Linkedin size={14} className="mr-1.5" />,
                  },
                  {
                    label: "Frontend Preview",
                    url: "https://jazzy-entremet-70cc2a.netlify.app/",
                    color: "bg-green-100 text-green-600 hover:bg-green-200",
                    icon: <span className="mr-1.5">🏡</span>,
                  },
                ],
              },
              {
                title: "Corrective RAG 🔄",
                description:
                  "Self-correcting RAG pipeline that automatically validates document relevance, rewrites ambiguous queries, and integrates real-time web search for comprehensive answers.",
                links: [
                  {
                    label: "View Project",
                    url: "https://github.com/Shiva-Prasad-Naroju/Corrective-RAG",
                    color:
                      "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100",
                    icon: <Github size={14} className="mr-1.5" />,
                  },
                ],
              },
              {
                title: "Multi-Agent AI Blog Generation",
                description:
                  "Complete content automation pipeline by leveraging CrewAI orchestrating three specialized AI agents (Planner, Writer, Editor) to produce SEO-optimized, publication-ready content.",
                links: [
                  {
                    label: "View Project",
                    url: "https://github.com/Shiva-Prasad-Naroju/Mutli-Agent-AI-Blog-Generator",
                    color:
                      "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100",
                    icon: <Github size={14} className="mr-1.5" />,
                  },
                  {
                    label: "Output Video",
                    url: "https://www.linkedin.com/posts/shiva-prasad-naroju-4772a6184_ai-aiagents-multiagentsystem-activity-7361865034626420737-dRGG?utm_source=share&utm_medium=member_desktop&rcm=ACoAACt4LRsBQ69c1XBIukR81m4Iy7dej5736CU",
                    color: "bg-blue-100 text-blue-600 hover:bg-blue-200",
                    icon: <Linkedin size={14} className="mr-1.5" />,
                  },
                ],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] group">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 transform hover:scale-105 shadow-sm ${link.color}`}
                      >
                        {link.icon}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <a
              href="https://github.com/shiva-Prasad-Naroju/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-105 ripple shadow-lg hover:shadow-xl"
            >
              <Github size={20} className="mr-2" />
              Explore More on My GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-orange-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light mb-12 text-center">
            Technical Skills
          </h2>

          {/* Spider Web Skills Visualization */}
          <div className="mb-16 animate-on-scroll">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-orange-50/30"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900">
                  Core AI Expertise
                </h3>
                <div className="spider-web-container">
                  <svg
                    className="spider-web"
                    viewBox="0 0 400 400"
                    width="400"
                    height="400"
                  >
                    {/* Web lines */}
                    <g
                      className="web-lines"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      fill="none"
                    >
                      {/* Concentric polygons */}
                      <polygon
                        points="200,50 350,150 350,250 200,350 50,250 50,150"
                        opacity="0.3"
                      />
                      <polygon
                        points="200,80 320,160 320,240 200,320 80,240 80,160"
                        opacity="0.5"
                      />
                      <polygon
                        points="200,110 290,170 290,230 200,290 110,230 110,170"
                        opacity="0.7"
                      />
                      <polygon
                        points="200,140 260,180 260,220 200,260 140,220 140,180"
                        opacity="0.9"
                      />

                      {/* Radial lines */}
                      <line x1="200" y1="200" x2="200" y2="50" />
                      <line x1="200" y1="200" x2="350" y2="150" />
                      <line x1="200" y1="200" x2="350" y2="250" />
                      <line x1="200" y1="200" x2="200" y2="350" />
                      <line x1="200" y1="200" x2="50" y2="250" />
                      <line x1="200" y1="200" x2="50" y2="150" />
                    </g>

                    {/* Skill nodes */}
                    <g className="skill-nodes">
                      <circle
                        cx="200"
                        cy="50"
                        r="8"
                        fill="#3b82f6"
                        className="skill-node"
                      />
                      <circle
                        cx="350"
                        cy="150"
                        r="8"
                        fill="#f97316"
                        className="skill-node"
                      />
                      <circle
                        cx="350"
                        cy="250"
                        r="8"
                        fill="#10b981"
                        className="skill-node"
                      />
                      <circle
                        cx="200"
                        cy="350"
                        r="8"
                        fill="#ef4444"
                        className="skill-node"
                      />
                      <circle
                        cx="50"
                        cy="250"
                        r="8"
                        fill="#8b5cf6"
                        className="skill-node"
                      />
                      <circle
                        cx="50"
                        cy="150"
                        r="8"
                        fill="#f59e0b"
                        className="skill-node"
                      />
                      <circle
                        cx="200"
                        cy="200"
                        r="12"
                        fill="#1f2937"
                        className="skill-node central-node"
                      />
                    </g>
                  </svg>

                  {/* Skill labels */}
                  <div className="skill-labels">
                    <div
                      className="skill-label"
                      style={{ top: "10%", left: "47%" }}
                    >
                      <span className="skill-text">Machine Learning</span>
                    </div>
                    <div
                      className="skill-label"
                      style={{ top: "25%", right: "5%" }}
                    >
                      <span className="skill-text">Deep Learning</span>
                    </div>
                    <div
                      className="skill-label"
                      style={{ bottom: "25%", right: "5%" }}
                    >
                      <span className="skill-text">NLP</span>
                    </div>
                    <div
                      className="skill-label"
                      style={{ bottom: "10%", left: "47%" }}
                    >
                      <span className="skill-text">LLMs</span>
                    </div>
                    <div
                      className="skill-label"
                      style={{ bottom: "25%", left: "5%" }}
                    >
                      <span className="skill-text">RAG</span>
                    </div>
                    <div
                      className="skill-label"
                      style={{ top: "25%", left: "5%" }}
                    >
                      <span className="skill-text">AI Agents</span>
                    </div>
                    <div
                      className="skill-label central-label"
                      style={{ top: "47%", left: "42%" }}
                    >
                      <span className="skill-text font-bold">Gen AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
            {[
              {
                category: "Machine Learning",
                icon: "🤖",
                skills: [
                  "Supervised Learning",
                  "Unsupervised Learning",
                  "Model Training",
                  "End-to-End Pipelines",
                ],
              },
              {
                category: "Deep Learning",
                icon: "🧠",
                skills: ["ANN", "CNN", "RNN", "LSTM", "Transformers", "LLMs"],
              },
              {
                category: "Generative AI",
                icon: "✨",
                skills: [
                  "Chatbots",
                  "RAG",
                  "Graph RAG",
                  "Corrective RAG",
                  "Adaptive RAG",
                  "AI Agents",
                  "Agentic AI",
                ],
              },
              {
                category: "AI Frameworks",
                icon: "🔧",
                skills: [
                  "LangChain",
                  "LangGraph",
                  "CrewAI",
                  "Model Context Protocol",
                  "Vector DBs",
                ],
              },
              {
                category: "Platforms & APIs",
                icon: "🌐",
                skills: ["HuggingFace", "OpenAI", "Streamlit", "FastAPI"],
              },
              {
                category: "Deployment & Tools",
                icon: "🚀",
                skills: ["Docker", "CI/CD", "GitHub Actions", "Python", "SQL"],
              },
            ].map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skillGroup.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-gray-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-orange-200 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-14 tracking-tight">
            Education
          </h2>

          {/* Timeline wrapper */}
          <div className="relative border-l-2 border-blue-200 space-y-10 pl-8">

            {/* B.Tech */}
            <div className="relative group">
              {/* Timeline Dot */}
              <span className="absolute -left-[11px] top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-md group-hover:scale-110 transition-transform"></span>
              
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Bachelor of Technology
                    </h3>
                    <p className="text-gray-600">Civil Engineering</p>
                    <p className="text-blue-600 font-medium mt-1">
                      TKR College of Engineering & Technology
                    </p>
                  </div>
                  <div className="text-gray-500 text-sm mt-3 sm:mt-0 font-medium">
                    2021 – 2024
                  </div>
                </div>
              </div>
            </div>

            {/* Diploma */}
            <div className="relative group">
              <span className="absolute -left-[11px] top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-md group-hover:scale-110 transition-transform"></span>
              
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Diploma
                    </h3>
                    <p className="text-gray-600">Civil Engineering</p>
                    <p className="text-blue-600 font-medium mt-1">
                      TKR College of Engineering & Technology
                    </p>
                  </div>
                  <div className="text-gray-500 text-sm mt-3 sm:mt-0 font-medium">
                    2018 – 2021
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>











      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-sky-50 relative overflow-hidden"
      >
        {/* Floating gradient orbs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-16 left-24 w-40 h-40 bg-sky-200/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-28 w-52 h-52 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-sky-200/30 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-light mb-14 text-center relative inline-block">
            Trainings & Certifications
            <span className="block w-28 h-1 mx-auto mt-3 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"></span>
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Data Science, ML, DL, NLP",
                description: "- From Udemy (Krish Naik)",
                year: "2025",
                href: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-4a523efb-3f7d-4699-9585-119765651fe7.pdf",
              },
              {
                title: "Core ML & MLOps",
                description: "- Antern",
                year: "2024-2025",
                href: "https://drive.google.com/file/d/1cN2wWrj74tsUbfxziZIUr8V0wLeZAnLB/view?usp=drivesdk",
              },
              {
                title: "Multi Agents System",
                description: "- Crew AI",
                year: "2024",
                href: "https://learn.deeplearning.ai/accomplishments/6e397974-579a-4f46-bf2c-13dd3e23310d?usp=sharing",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-2xl p-6 shadow-md
                          transition-all duration-300 hover:scale-[1.04] hover:shadow-xl hover:shadow-sky-300/40 
                          group animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Top section */}
                <div className="flex items-center mb-4">
                  <span className="text-xs px-3 py-1 bg-white border border-blue-300 text-blue-600 rounded-full shadow-sm">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-sky-600 transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>

                {/* Link */}
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sky-600 text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  View Certificate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0-7L10 14m11-11L10 14m0 0H3v7h7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-16 px-6 overflow-hidden">
        {/* Decorative Orbs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 right-28 w-52 h-52 bg-sky-400/20 rounded-full blur-3xl animate-bounce"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h3 className="text-3xl font-light mb-6 tracking-wide animate-fade-in">
            Let’s <span className="text-sky-400 font-medium">Connect</span>
          </h3>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 mb-10">
            <a
              href="https://github.com/shiva-Prasad-Naroju/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/70 hover:bg-gray-700 
                        transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-sky-500/40"
            >
              <Github size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/shiva-prasad-naroju-4772a6184/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600/80 hover:bg-blue-700 
                        transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/50"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="mailto:shivanaroju26@gmail.com"
              className="p-3 rounded-full bg-red-600/80 hover:bg-red-700 
                        transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/50"
            >
              <Mail size={26} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm tracking-wide hover:text-gray-300 transition-colors">
            © {new Date().getFullYear()} SHIVA PRASAD NAROJU <br />Driving Innvoative Projects in AI<br />
          </p>
        </div>
      </footer>  
    </div>  
  );
} 

export default App;