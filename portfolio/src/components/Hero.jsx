import { useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    
    <section className="hero">
    

    <motion.h1
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
  FAIZ <span>SAYYED</span>
</motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="hero-subtitle"
      >
        Electronics & Computer Science Engineering Student
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hero-focus"
      >
       <TypeAnimation
  sequence={[
    "Building Full-stack Web Applications",
    2000,
    "Building Mobile Applications",
    2000,
    "Building Desktop Utilities",
    2000,
    "Local AI Experimentation",
    2000,
    "Building Product-oriented Projects",
    2000,
  ]}
  speed={50}
  repeat={Infinity}
  className="type-animation-text"
/>

<div className="floating-icons">

  <FaReact className="icon react" />

  <FaNodeJs className="icon node" />

  <FaPython className="icon python" />

</div>

      </motion.div>

      <motion.div 
        className="hero-cta-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <a href="#projects" className="action-btn primary">
          View Projects
        </a>
        <a
          href="https://github.com/Faizzsyed"
          target="_blank"
          rel="noreferrer"
          className="action-btn"
        >
          <FaGithub /> GitHub
        </a>
      </motion.div>

<motion.div 
  className="hero-domain-labels"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2 }}
>
  <div className="domain-label">Web</div>
  <div className="domain-label">Mobile</div>
  <div className="domain-label">Desktop</div>
  <div className="domain-label">AI</div>
</motion.div>

    </section>
    
  );
}

export default Hero;