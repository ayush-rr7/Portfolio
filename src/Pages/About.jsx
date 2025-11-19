import PageWrapper from "../Components/PageWrapper";

export default function About() {
  return (
      <section className="min-h-screen animated-gradient relative overflow-hidden">
    <PageWrapper>
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="text-gray-300 leading-relaxed text-lg">
        I'm Ayush Ranjan, an Information Technology undergraduate (2023–27) from
        UIETH Panjab University with a strong foundation in Data Structures,
        Algorithms, and core CS subjects like DBMS, OOPS, and Computer Networks. I build and deploy 
        full-stack MERN applications and enjoy solving problems on platforms including LeetCode
        and Codeforces with 200+ DSA problems solved. I also actively participate in competitive programming contests.
        I'm seeking a Software Engineer Internship to apply technical skills and build scalable systems.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Education</h2>
      <p className="text-gray-300">
        <strong>BE in Information Technology</strong> – UIETH Panjab University (2023–27)  
        <br /> CGPA: <strong>7.2</strong>
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Location</h2>
      <p className="text-gray-300">Bhāgalpur, Bihar</p>

    </PageWrapper>
    </section>
  );
}
