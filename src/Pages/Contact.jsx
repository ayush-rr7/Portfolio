import PageWrapper from "../Components/PageWrapper";

export default function Contact() {
  return (<section className="min-h-screen animated-gradient relative overflow-hidden">
    <PageWrapper>
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      {/* Contact Details */}
      <div className="bg-white/10 p-6 rounded-xl border border-white/10 mb-10">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>

        <p className="text-gray-300 mb-2">
          <strong>Phone:</strong> 9262389427
        </p>
        <p className="text-gray-300 mb-2">
          <strong>Email:</strong> ayushranjan6976@gmail.com
        </p>
        <p className="text-gray-300 mb-2">
          <strong>Location:</strong> Bhāgalpur, Bihar
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Social Profiles</h2>
        <ul className="text-gray-300 space-y-2">
          <li>
            <a
              href="https://linkedin.com/in/ayush-ranjan6976"
              className="text-blue-400 hover:underline"
            >
              LinkedIn: ayush-ranjan6976
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ayush-rr7"
              className="text-blue-400 hover:underline"
            >
              GitHub: ayush-rr7
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/ayushr_rr7"
              className="text-blue-400 hover:underline"
            >
              LeetCode: ayushr_rr7
            </a>
          </li>
          <li>
            <a
              href="https://codeforces.com/profile/ayush_rr7"
              className="text-blue-400 hover:underline"
            >
              Codeforces: ayush_rr7
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
        <a href="mailto:ayushranjan6976@gmail.com">
            Send Email
        </a>
      {/* <div className="bg-white/10 p-6 rounded-xl border border-white/10">
        <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>

        <form className="space-y-4 max-w-xl mx-auto">
          <input
            className="w-full p-3 rounded bg-white/10 placeholder-gray-400 focus:outline-none"
            placeholder="Your Name"
          />
          <input
            className="w-full p-3 rounded bg-white/10 placeholder-gray-400 focus:outline-none"
            placeholder="Your Email"
          />
          <textarea
            rows="4"
            className="w-full p-3 rounded bg-white/10 placeholder-gray-400 focus:outline-none"
            placeholder="Your Message"
          ></textarea>

          <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition w-full md:w-auto">
            Send Message
          </button>
        </form> 
      </div>*/}
    </PageWrapper>
    </section>
  );
}
