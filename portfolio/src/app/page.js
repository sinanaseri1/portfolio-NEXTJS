"use client";

import './globals.css'; // Import global styles
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../../components/Header'; // Adjusted path
import About from '../../components/About'; // Adjusted path
import TechStack from '../../components/TechStack'; // Adjusted path
import Projects from '../../components/Projects'; // Adjusted path
import Contact from '../../components/Contact'; // Adjusted path


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="parallax-bg font-sans">
      <Head>
        <title>Sina Naseri Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}