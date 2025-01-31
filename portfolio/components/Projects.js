export default function Projects() {
    return (
      <section className="max-w-3xl mx-auto p-8 mt-8" id="projects" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-2xl font-bold text-textColor text-center mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-textColor mb-2">
              Revenge of a Samurai
            </h3>
            <p className="text-gray-700 mb-4">
              A 2D text-based game built using JavaScript, HTML5, and Tailwind
              CSS. The game immerses players in a samurai's journey of revenge,
              combining storytelling with interactive gameplay elements.
            </p>
            <a
              href="https://sinanaseri1.github.io/week3-project/"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Play
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-textColor mb-2">Quiz Website</h3>
            <p className="text-gray-700 mb-4">
              An engaging quiz website designed with Tailwind CSS and HTML5.
              Features multiple question formats, clean UI, and responsive design
              for optimal user experience.
            </p>
            <a
              href="https://sinanaseri1.github.io/week2-project/"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Test Your Knowledge
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-textColor mb-2">
              Table Tennis Hobby Site
            </h3>
            <p className="text-gray-700 mb-4">
              A visually appealing site created using HTML and Tailwind CSS,
              showcasing the intricacies of table tennis. Includes sections about
              techniques, equipment, and Sina's personal table tennis journey.
            </p>
            <a
              href="https://sinanaseri1.github.io/week1-project/"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>
    );
  }