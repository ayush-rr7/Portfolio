import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen animated-gradient overflow-hidden text-white flex items-center justify-center px-6">

      {/* Optional stripes overlay */}
      <div className="absolute inset-0 stripes pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Hi, I'm <span className="text-purple-400">Ayush Ranjan</span>
        </motion.h1>

        {/* Typewriter Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-xl md:text-2xl text-gray-300 font-semibold h-10"
        >
          <Typewriter
            options={{
              strings: [
              "MERN Stack Developer",
              "Competitive Programmer",
              "Problem Solver",
              "Full-Stack Web Developer",
              "Web Development Enthusiast",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-2xl mt-6 text-lg mx-auto">
          Information Technology undergraduate from UIETH Panjab University. 
          Passionate about MERN development, computer science fundamentals, and 
          competitive programming with 200+ DSA problems solved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="/projects"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-lg transition-all hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="/resume"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg transition-all hover:scale-105"
          >
            Resume
          </a>
          <a
            href="/contact"
            className="px-8 py-3 bg-gray-700 hover:bg-gray-800 rounded-xl text-lg transition-all hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center"
        >
          {[
            { label: "DSA Problems Solved", value: "200+" },
            { label: "Major Projects", value: "2+" },
            { label: "Tech Stack", value: "MERN" },
            { label: "Experience", value: "Full Stack" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/5 px-6 py-4 rounded-xl border border-white/10 hover:bg-white/10 transition"
            >
              <div className="text-2xl font-bold text-purple-400">{s.value}</div>
              <div className="text-gray-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
