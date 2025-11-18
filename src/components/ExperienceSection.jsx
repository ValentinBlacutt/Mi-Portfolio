import React from 'react';
import { Briefcase, Trophy, Award } from 'lucide-react';
import { DATA } from '../data/portfolioData';

const ExperienceSection = () => {
  const iconMap = {
    Briefcase: <Briefcase className="experience-icon" />,
    Trophy: <Trophy className="experience-icon" />,
    Award: <Award className="experience-icon" />
  };

  return (
    <section id="experiencia" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Exposiciones y Logros</span>
        </h2>
        <div className="experience-list">
          {DATA.exposiciones.map((expo, idx) => (
            <div
              key={idx}
              className="experience-item animated-border-card"
            >
              <div className="experience-icon-container">
                {iconMap[expo.icon]}
              </div>
              <div className="experience-content">
                <h3 className="experience-title">{expo.lugar}</h3>
                <p className="experience-desc">{expo.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;