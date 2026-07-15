import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
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
        transition={{ delay: 1 }}
      >
       <TypeAnimation
  sequence={[
    "Full Stack Developer",
    1500,
    "Python Developer",
    1500,
    "AI Automation Engineer",
    1500,
    "Computer Vision Developer",
    1500,
  ]}
  speed={50}
  repeat={Infinity}
/>

<div className="floating-icons">

  <FaReact className="icon react" />

  <FaNodeJs className="icon node" />

  <FaPython className="icon python" />

</div>

      </motion.h2>

      <a href="#projects">
  <button>View Projects</button>
</a>

      <a>
        <a
  href="https://www.linkedin.com/in/faizsayyed-tech"
  target="_blank"
  rel="noreferrer"
  className="resume-btn"
>
  View LinkedIn Profile
</a>
      
  
</a>

    </section>
    
  );
  useEffect(() => {
  AOS.init();
}, []);
<div className="hero-stats">
  <div>
    <h3>3+</h3>
    <p>Projects</p>
  </div>

  <div>
    <h3>5+</h3>
    <p>Technologies</p>
  </div>

  <div>
    <h3>100%</h3>
    <p>Passion</p>
  </div>
</div>
}

export default Hero;