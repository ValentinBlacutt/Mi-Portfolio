import React from 'react';
import { Server, Layout, Database, Code2 } from 'lucide-react';
import { DATA } from '../data/portfolioData';

const SkillCard = ({ skill }) => {
  const iconMap = {
    Server: <Server className="skill-icon" />,
    Layout: <Layout className="skill-icon" />,
    Database: <Database className="skill-icon" />,
    Code2: <Code2 className="skill-icon" />
  };

  return (
    <div className="skill-card animated-border-card">
      <div className="skill-header">
        <div className="skill-icon-container">
          {iconMap[skill.icon]}
        </div>
        <h3 className="skill-title">{skill.categoria}</h3>
      </div>
      <div className="skills-list">
        {skill.skills.map((s, i) => (
          <div key={i} className="skill-item">
            <div className="skill-bullet"></div>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="habilidades" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Habilidades Técnicas</span>
        </h2>
        <div className="skills-grid">
          {DATA.habilidades.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;