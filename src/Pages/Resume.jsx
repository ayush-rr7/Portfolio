import PageWrapper from "../Components/PageWrapper";

export default function Resume() {
  return (
  <section className="relative min-h-screen animated-gradient overflow-hidden text-white flex items-center  px-6">

    <PageWrapper>
      <h1 className="text-4xl font-bold mb-6">Resume</h1>

      <p className="text-gray-300 mb-6">
        Download my latest resume containing education, skills, projects, and experience.
      </p>

      
      <a
        href="/resume@mns.pdf"
        
        className="px-8 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
      >
        View Resume
      </a>

      <div className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-300">
          Phone: 9262389427 <br />
          Email: ayushranjan6976@gmail.com <br />
          Location: Bhāgalpur, Bihar
        </p>

        <h2 className="text-3xl font-semibold mt-6 mb-2">Links</h2>
        <ul className="text-gray-300">
          <li>LinkedIn: ayush-ranjan6976</li>
          <li>GitHub: ayushrr7</li>
          <li>LeetCode: ayushr_rr7</li>
          <li>Codeforces: ayush_rr7</li>
        </ul>
      </div>
    </PageWrapper>
    </section>
  );
}
