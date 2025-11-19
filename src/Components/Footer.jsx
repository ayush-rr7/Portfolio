import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl py-5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-300 text-xl">
          <a
            href="https://github.com/ayush-rr7"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/ayush-ranjan6976"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="ayushranjan6976@gmail.com"
            className="hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Designed By */}
        <p className="text-gray-400 text-sm">
          Designed by <span className="text-purple-400 font-semibold">Ayush</span>
        </p>
      </div>

      {/* COPYRIGHT LINE */}
      <div className="text-center text-gray-500 text-xs mt-3">
        © {new Date().getFullYear()} Ayush Ranjan. All Rights Reserved.
      </div>
    </footer>
  );
}
