import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Resume", link: "/resume" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-purple-400">
         < div>{"<Ayush />"}</div>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg">
          {menu.map((item) => (
            <li key={item.name} className="relative group">
              <Link to={item.link} className="hover:text-purple-400 transition">
                {item.name}
              </Link>

              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 px-6 py-6 space-y-4">
          {menu.map((item) => (
            <p key={item.name}>
              <Link
                to={item.link}
                className="block text-xl py-1"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </p>
          ))}
        </div>
      )}
    </nav>
  );
}
