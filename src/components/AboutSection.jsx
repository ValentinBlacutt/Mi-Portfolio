import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Sobre Mí</span>
        </h2>
        <div className="animated-border-card about-card">
          <p className="about-text">
            Tengo 18 años y soy estudiante del último año de la <strong>Escuela Secundaria Técnica N° 6 Chacabuco</strong>, 
            donde me formo como Técnico en Programación.
          </p>
          <p className="about-text">
            Cuento con conocimientos avanzados en desarrollo backend con <strong>ASP.NET Core</strong>, 
            arquitecturas <strong>MVC y MVVM</strong>, y frameworks modernos como 
            <strong> Blazor</strong> y <strong>Avalonia</strong>.
          </p>
          <p className="about-text">
            En el frontend trabajo con <strong>HTML, CSS, JavaScript, React y Bootstrap</strong>. 
            También tengo experiencia con bases de datos <strong>SQL Server y MySQL</strong>, 
            y utilizo <strong>Git y GitHub</strong> para control de versiones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;