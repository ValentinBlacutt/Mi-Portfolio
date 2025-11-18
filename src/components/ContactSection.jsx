import React from 'react';
import { Facebook, Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Conectemos</span>
        </h2>
        <p className="contact-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <div className="contact-links">
          <a
            href="https://github.com/ValentinBlacutt?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link animated-border-card"
          >
            <Github className="contact-icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61573492471850"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link animated-border-card"
          >
            <Facebook className="contact-icon" />
          </a>
          <a
            href="mailto:valentinblacutt8@gmail.com?subject=Contacto desde Portfolio"
            className="contact-link animated-border-card"
          >
            <Mail className="contact-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;