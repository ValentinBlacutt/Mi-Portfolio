import React from 'react';
import { Mic } from 'lucide-react';
import { Play } from 'lucide-react';

const MediaSection = () => {
  return (
    <section id="medios" className="media-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Medios y Participaciones</span>
        </h2>
        <div className="media-card animated-border-card">
          <div className="media-header">
            <div className="media-icon-container">
              <Mic className="media-icon" />
            </div>
            <div className="media-content">
              <h3 className="media-title">Podcast con Universidad de Morón</h3>
              <p className="media-desc">
                Participación en podcast junto con representantes de la Universidad de Morón y 
                funcionarios del municipio para discutir proyectos tecnológicos en desarrollo 
                y futuras iniciativas de innovación en la región.
              </p>
              <div className="media-tags">
                <span className="media-tag">Universidad de Morón</span>
                <span className="media-tag">Municipio</span>
                <span className="media-tag">Proyectos Tecnológicos</span>
              </div>
            </div>
          </div>
          <p className="media-note">
            💡 Discusión sobre innovación tecnológica y desarrollo de proyectos en colaboración público-privada
          </p>
         <a 
            href="https://youtube.com/clip/UgkxtNn_1ERciwg80_pP6awWqjXyo_VH5SOV?si=pDGk4owuF_RooPT_" 
            target='_blank'
            rel="noopener noreferrer"
            className="btn-nota"
          >
            <Play size={18} />
              Ver nota
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;