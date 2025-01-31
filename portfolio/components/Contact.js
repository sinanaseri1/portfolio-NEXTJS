export default function Contact() {
    return (
      <footer className="max-w-3xl mx-auto p-8 text-center" id="contact-me" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-2xl font-bold text-textColor mb-4">Contact Me</h2>
        <p className="text-textColor mb-4 flex justify-center items-center gap-2">
          <a
            href="/resume_sina_naseri.pdf"
            target="_blank"
            className="text-blue-600 underline flex items-center gap-2 hover:text-blue-800"
          >
            <i className="fas fa-file-download"></i> Download My CV
          </a>
        </p>
        <p className="text-textColor mb-4">
          Feel free to reach out via
          <a
            href="mailto:naseri.sina@hotmail.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Email
          </a>
          .
        </p>
        <p className="text-textColor flex justify-center items-center gap-2">
          <a href="https://github.com/sinanaseri1" target="_blank">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="w-8 h-8 hover:scale-110 transition-transform duration-300"
            />
          </a>
        </p>
        <p className="text-sm text-gray-500 mt-4">© 2025 Sina Naseri</p>
      </footer>
    );
  }