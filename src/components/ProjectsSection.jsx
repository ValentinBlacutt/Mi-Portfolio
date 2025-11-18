import React from 'react';
import { ExternalLink, Trophy } from 'lucide-react';
import { DATA } from '../data/portfolioData';

const ProjectCard = ({ proyecto }) => {
  return (
    <div className="project-card animated-border-card">
      <div className="project-header">
        <div>
          {proyecto.destacado && (
            <div className="project-badge destacado">
              DESTACADO
            </div>
          )}
          <h3 className="project-title">{proyecto.nombre}</h3>
        </div>
        <span className={`project-status ${proyecto.estado === 'Completado' ? 'completado' : 'desarrollo'}`}>
          {proyecto.estado}
        </span>
      </div>

      {proyecto.premio && (
        <div className="project-premio">
          <div className="premio-header">
            <Trophy className="premio-icon" />
            {proyecto.premio}
          </div>
          <p className="premio-desc">{proyecto.premioDesc}</p>
        </div>
      )}

      <p className="project-desc">{proyecto.descripcion}</p>
      
      <div className="project-features">
        <h4 className="features-title">Características:</h4>
        <ul className="features-list">
          {proyecto.features.map((feature, i) => (
            <li key={i} className="feature-item">
              <span className="feature-bullet">▹</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-tech">
        {proyecto.tecnologias.map((tech, i) => (
          <span
            key={i}
            className="tech-tag"
          >
            {tech}
          </span>
        ))}
      </div>
      
      
      <a 
        href={proyecto.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
      >
        Ver más <ExternalLink className="link-icon" />
      </a>
    </div>
  );
};


const ProjectsSection = () => {
  return (
    <section id="proyectos" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Proyectos Destacados</span>
        </h2>
        <div className="projects-grid">
          {DATA.proyectos.map((proyecto, idx) => (
            <ProjectCard key={idx} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;