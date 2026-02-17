import PageWrapper from "../Components/PageWrapper";

export default function Projects() {
  const projects = [
    {
      title: "LodgeEasy",
      tech: "MongoDB • Express • Node.js • EJS • Tailwind CSS",
      desc: "Full-stack rental property platform with separate Host and Guest roles, secure authentication using bcrypt and express-session, deployed on Vercel.",
      links: {
        demo: "https://lodge-easy.vercel.app/",
        github: "https://github.com/ayush-rr7/LodgeEasy",
      },
    },
    {
      title: "TaskPlanner",
      tech: "MongoDB • Express • React • Node.js",
      desc: "Task management application with add, update, delete features. Clean UI and RESTful backend with MongoDB storage.",
      links: {
        // demo removed
        github: "https://github.com/ayush-rr7/Task-Management-Application",
      },
    },
  ];

  return (
    <section className="relative min-h-screen animated-gradient overflow-hidden text-white flex items-center justify-center px-6">
      <PageWrapper>
        <h1 className="text-4xl font-bold mb-10">Projects</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="bg-white/10 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
              <p className="text-purple-400 mb-2">{p.tech}</p>
              <p className="text-gray-300 mb-4">{p.desc}</p>

              <div className="flex gap-4">
                {/* Only show live demo if demo link exists */}
                {p.links.demo && (
                  <a
                    className="px-4 py-2 bg-blue-600 rounded"
                    href={p.links.demo}
                  >
                    Live Demo
                  </a>
                )}

                <a
                  className="px-4 py-2 bg-gray-700 rounded"
                  href={p.links.github}
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
    </section>
  );
}
