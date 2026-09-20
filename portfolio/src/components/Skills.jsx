import { 
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGithub, FaGitAlt 
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiExpress, SiMongodb, SiFirebase, 
  SiFlutter, SiDart, SiElectron, SiOpencv, SiVite, SiNetlify, SiCloudinary 
} from "react-icons/si";
import { TbBrain, TbAppWindow } from "react-icons/tb";

const iconMap = {
  "React": <FaReact />,
  "JavaScript": <SiJavascript />,
  "TypeScript": <SiTypescript />,
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3Alt />,
  "Node.js": <FaNodeJs />,
  "Express": <SiExpress />,
  "MongoDB": <SiMongodb />,
  "Firebase": <SiFirebase />,
  "Flutter": <SiFlutter />,
  "Dart": <SiDart />,
  "Python": <FaPython />,
  "Electron": <SiElectron />,
  "Whisper": <TbBrain />,
  "OpenCV": <SiOpencv />,
  "Flet": <TbAppWindow />,
  "Git": <FaGitAlt />,
  "GitHub": <FaGithub />,
  "Vite": <SiVite />,
  "Netlify": <SiNetlify />,
  "Cloudinary": <SiCloudinary />
};

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "Firebase"]
    },
    {
      title: "Mobile",
      skills: ["Flutter", "Dart"]
    },
    {
      title: "Desktop & AI",
      skills: ["Python", "Electron", "Whisper", "OpenCV", "Flet"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Vite", "Netlify", "Cloudinary"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skills-container">
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.title}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-chips">
              {category.skills.map((skill) => (
                <div className="skill-chip-rich" key={skill}>
                  <span className="skill-icon">{iconMap[skill]}</span>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;