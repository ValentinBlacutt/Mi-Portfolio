import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = ({ scrollY }) => {
  return (
    <section id="inicio" className="hero-section">
      <div 
        className="hero-parallax-wrapper"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="hero-background">
          <div className="hero-blob blob-1"></div>
          <div className="hero-blob blob-2"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span>Hola, soy</span>
            </div>
            <h1 className="hero-title">
              <span className="gradient-text">Valentin Blacutt</span>
            </h1>
            <p className="hero-subtitle">
              Estudiante de Técnico en Programación | Futuro graduado 2026
            </p>
            <div className="hero-buttons">
              <a href="#proyectos" className="btn btn-primary">
                Ver Proyectos
              </a>
              <a href="#contacto" className="btn btn-secondary">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Flecha fuera del parallax wrapper para que mantenga su posición */}
      <a href="#sobre-mi" className="scroll-indicator">
        <ChevronDown className="scroll-icon" />
      </a>
    </section>
  );
};

export default HeroSection;
