import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiFramer } from "react-icons/si";

const skills = [
  { group: "Frontend", items: ["React", "Tailwind CSS", "Framer Motion", "Bootstrap"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { group: "Database", items: ["MongoDB", "MySQL"] },
  { group: "Tools", items: ["Git", "Figma", "Postman"] },
];

const projects = [
  {
    title: "ICTAK Dataset Gallery",
    stack: "MERN • Tailwind • Framer Motion",
    description:
      "A dataset and alumni project platform: upload/manage datasets, view alumni projects, like/comment, file uploads (images & PDF), protected admin routes.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=60",
    github: "#",
    live: "#",
  },
  {
    title: "Event Booking System",
    stack: "Node.js • MongoDB • Stripe",
    description:
      "Event booking with QR-code check-in, controllers role, Google Calendar integration, and Stripe payments.",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1400&q=60",
    github: "#",
    live: "#",
  },
  {
    title: "Library Interactive App",
    stack: "React • Gutendex API • Node.js",
    description:
      "Browse/filter books by category, checkout rules (max 5 books, <=3 per category), responsive UI and login system.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=60",
    github: "#",
    live: "#",
  },
];

export default function Portfolio() {
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.stack.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-gray-900 text-gray-100">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50 shadow-lg border-b border-cyan-400/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Navami
          </h1>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-6xl mx-auto px-6 pt-28 pb-12 flex flex-col md:flex-row items-center md:justify-between gap-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Hi — I’m{" "}
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
              Navami
            </span>
          </motion.h1>
          <p className="mt-4 text-lg max-w-xl text-gray-300">
            Full Stack Developer building clean, performant web applications. I
            love designing intuitive user experiences and reliable backend services.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-lg hover:shadow-cyan-400/50 transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2 border border-cyan-400 text-cyan-300 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-400 hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://github.com/navami21"
              aria-label="GitHub"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="mailto:navamib2023@gmail.com"
              aria-label="Email"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="w-full md:w-1/3"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/20 hover:shadow-cyan-400/50 transition-shadow">
            <img src="/src/assets/mee.jpg" alt="Hero" className="w-full h-56 object-cover" />
            <div className="p-4 bg-black/40 backdrop-blur-sm">
              <h3 className="font-semibold text-cyan-400">Full-Stack Developer</h3>
              <p className="text-sm text-gray-400">
                React • Node.js • MongoDB • Tailwind
              </p>
            </div>
          </div>
        </motion.div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* SKILLS */}
        <section id="skills" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s) => (
              <motion.div
                key={s.group}
                whileHover={{ y: -6, rotate: 1 }}
                className="p-5 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-cyan-400/20"
              >
                <h4 className="font-medium mb-3 text-lg bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  {s.group}
                </h4>
                <ul className="flex flex-wrap">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="inline-block mr-2 mb-2 px-3 py-1 bg-white/5 rounded-full border border-cyan-400/40 text-cyan-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Selected Projects
            </h2>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="px-3 py-2 rounded-lg border border-cyan-400/40 bg-black/40 backdrop-blur-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-cyan-400/20 hover:border-blue-400 transition-all"
              >
                <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-cyan-300">{p.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{p.stack}</p>
                  <p className="mt-3 text-sm text-gray-300">{p.description}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="px-3 py-2 rounded bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm hover:shadow-cyan-400/50 transition-all"
                    >
                      View Details
                    </button>
                    <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cyan-300 hover:underline"><FaGithub /> Code</a>
                    <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cyan-300 hover:underline"><FaExternalLinkAlt /> Live</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative bg-gray-900 rounded-xl shadow-xl max-w-3xl w-full overflow-hidden z-10 border border-cyan-400/30"
            >
              <div className="flex flex-col md:flex-row">
                <img src={selectedProject.image} alt="proj" className="w-full md:w-1/2 h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-2xl text-cyan-300">{selectedProject.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{selectedProject.stack}</p>
                  <p className="mt-4 text-gray-300">{selectedProject.description}</p>
                  <div className="mt-6 flex gap-3">
                    <a href={selectedProject.github} className="px-3 py-2 border border-cyan-400 rounded text-cyan-300 hover:bg-cyan-500 hover:text-white transition-all">View Code</a>
                    <a href={selectedProject.live} className="px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-400 text-white rounded transition-all">Open Live</a>
                    <button onClick={() => setSelectedProject(null)} className="px-3 py-2 border border-cyan-400 text-cyan-300 rounded">Close</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* CONTACT */}
        <section id="contact" className="mt-16 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-cyan-400/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Get in touch
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                I’m open to new opportunities — freelance or full-time. Drop a message and I’ll reply within a day.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-gray-300"><SiReact size={22} /> React / Frontend</div>
                <div className="flex items-center gap-3 text-gray-300"><SiNodedotjs size={22} /> Node.js / Backend</div>
                <div className="flex items-center gap-3 text-gray-300"><SiMongodb size={22} /> MongoDB</div>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const data = new FormData(form);
                const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
                const body = encodeURIComponent(`Email: ${data.get("email")}\n\nMessage:\n${data.get("message")}`);
                window.open(`mailto:navamib2023@gmail.com?subject=${subject}&body=${body}`);
              }}
              className="space-y-3"
            >
              <input name="name" placeholder="Your name" className="w-full px-3 py-2 border border-cyan-400/30 bg-black/40 backdrop-blur-sm rounded text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
              <input name="email" type="email" placeholder="Your email" className="w-full px-3 py-2 border border-cyan-400/30 bg-black/40 backdrop-blur-sm rounded text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
              <textarea name="message" placeholder="Message" rows={5} className="w-full px-3 py-2 border border-cyan-400/30 bg-black/40 backdrop-blur-sm rounded text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-400 hover:shadow-lg hover:shadow-cyan-400/50 text-white rounded transition-all">Send</button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 text-center text-sm text-gray-400">
          Built with ❤️ • React + Tailwind • © {new Date().getFullYear()} Navami
        </footer>
      </main>
    </div>
  );
}
