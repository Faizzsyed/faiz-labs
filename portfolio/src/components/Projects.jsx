import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { featuredProjects, allProjects, filterCategories } from "../data/projects";

const ProjectImage = ({ src, alt, title }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="featured-image-container">
      {!hasError && src ? (
        <img 
          src={src} 
          alt={alt} 
          loading="lazy"
          className={`project-screenshot ${isLoaded ? 'loaded' : ''}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      ) : null}
      
      {(hasError || !src || (!isLoaded && !hasError)) && (
        <div className="image-placeholder">
          <span className="placeholder-text">{title.substring(0, 1)}</span>
        </div>
      )}
    </div>
  );
};

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  return (
    <section className="projects" id="projects">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="featured-grid">
        {featuredProjects.map((project, index) => (
          <motion.div 
            className="featured-card" 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectImage src={project.image} alt={project.title} title={project.title} />
            
            <div className="featured-content">
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                <span className={`project-status ${project.status === 'Completed' ? 'status-completed' : 'status-active'}`}>
                  {project.status}
                </span>
              </div>
              
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              
              <div className="tech-chips">
                {project.tech.map(t => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              
              <div className="project-actions">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="action-btn">
                    <FaGithub /> {project.id === 'passport-photo-studio' ? 'Repository' : 'GitHub'}
                  </a>
                ) : (
                  <span className="action-btn disabled"><FaGithub /> GitHub</span>
                )}
                
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer" className="action-btn primary">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                ) : (
                  <span className="action-btn primary disabled"><FaExternalLinkAlt /> Live Demo</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="all-projects-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          All Projects
        </motion.h2>

        <div className="project-filters">
          {filterCategories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="all-projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="all-project-card" 
              key={project.id}
            >
              <div className="card-header">
                <span className="project-category">{project.category}</span>
              </div>
              
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              
              <div className="tech-chips small">
                {project.tech.map(t => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              
              <div className="project-actions small-actions">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="icon-link">
                    <FaGithub />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="icon-link">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Projects;