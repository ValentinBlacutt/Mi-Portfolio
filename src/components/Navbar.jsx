import React from 'react';

const Navbar = ({ activeSection }) => {
  const menuItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Sobre mí', id: 'sobre-mi' },
    { label: 'Habilidades', id: 'habilidades' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Experiencia', id: 'experiencia' },
    { label: 'Medios', id: 'medios' }
  ];
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span>Portfolio</span>
        </div>
        <div className="nav-menu">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
