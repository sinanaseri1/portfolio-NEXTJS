import { useEffect } from 'react';
import Lottie from 'lottie-web';

export default function Header() {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById('lottie-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets10.lottiefiles.com/packages/lf20_sR4JrJ.json',
    });
  }, []);

  return (
    <header className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 py-0" data-aos="fade-up">
      <div id="lottie-animation" className="w-40 h-40 mb-6"></div>
      <img
        src="/profilepic.PNG"
        alt="Sina Naseri"
        className="w-48 h-63 rounded-full mb-6 object-contain hover:scale-105 transition-transform duration-300"
      />
      <h1 className="text-4xl font-bold text-textColor mb-2">Sina Naseri</h1>
      <p className="text-lg text-textColor mb-4">Software Developer</p>
      <p className="text-textColor max-w-xl leading-relaxed mb-8">
        Crafting user-friendly, efficient software solutions and constantly
        exploring new technologies. Let's build something amazing together!
      </p>
      <a
        href="#about"
        className="bg-accent text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition duration-300"
      >
        Learn More About Me
      </a>
    </header>
  );
}