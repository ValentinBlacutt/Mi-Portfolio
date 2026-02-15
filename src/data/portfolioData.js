export const DATA = {
  proyectos: [
    {
      nombre: "Biopandora",
      descripcion: "E-Commerce hecho a medida para un Mercado Agroecólogico, tiene ABM completo de cada producto, pedido,etc, Muestra métricas de las ventas, conexión a afip, envio de mails y mucho más.",
      tecnologias: ["PHP", "MySql", "JavaScript", "HTML5"],
      destacado: true,
      estado: "Completado",
      features: [
        "ABM completo de pedidos, productos y más",
        "Interfaz moderna y adaptable",
        "Métricas de negocio",
        "Automatización de Procesos"
      ],
      url:"biopandora.com.ar"
    },
    {
      nombre: "Zinclas",
      descripcion: "Sistema de gestión de tareas diseñado para operar dentro de una red local (LAN). Permite la organización eficiente de proyectos y actividades dentro de instituciones o empresas, conectando diferentes áreas mediante una interfaz moderna y adaptable.",
      tecnologias: ["ASP.NET Core", "SQL Server", "Entity Framework", "MVVM"],
      destacado: true,
      premio: "🏆 Premio Innovación y Tecnología",
      premioDesc: "Universidad de La Matanza",
      estado: "Completado",
      features: [
        "Gestión de tareas en red local (LAN)",
        "Interfaz moderna y adaptable",
        "Sistema de mensajeria",
        "Organización eficiente de proyectos"
      ],
      url:"https://zinclas.netlify.app/"
    },
    {
      nombre: "Cluster Energético y Minero de Morón",
      descripcion: "Sistema para una alianza entre empresas con sólida trayectoria que ofrece soluciones integrales al sector energético y minero. Impulsa la vinculación entre el sector privado, organismos públicos y el sistema científico-tecnológico para fortalecer capacidades productivas e impulsar la innovación.",
      tecnologias: ["Java script", "HTML5","CSS"],
      destacado: true,
      estado: "En Desarrollo",
      features: [
        "Soluciones para sector energético y minero",
        "Vinculación público-privada",
        "Gestión de cooperación empresarial",
        "Innovación y competitividad"
      ],
      url:"https://clustermoron.com/"
    },
    {
      nombre: "Sistema de Pedidos Restaurant",
      descripcion: "Sistema en pantalla para gestión de pedidos en tiempo real desarrollado en 2 semanas. Permite a los restaurantes gestionar órdenes de manera eficiente con una interfaz intuitiva y rápida.",
      tecnologias: ["Blazor", "ASP.NET CORE", "SQL Server Express", "Entity Framework","MVC"],
      destacado: false,
      estado: "En Desarrollo",
      features: [
        "Gestión de pedidos en tiempo real",
        "Interfaz táctil intuitiva",
        "Sistema de gesiton para admin",
        "Desarrollo rápido (2 semanas)"
      ],
      url:"http://www.rapidorder.somee.com/"  
    },
    {
      nombre: "E-commerce Emprendimiento Local",
      descripcion: "Plataforma de comercio electrónico personalizada para pequeño emprendimiento local. Incluye catálogo de productos, carrito de compras y panel de administración.",
      tecnologias: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      destacado: false,
      estado: "Completado",
      features: [
        "Catálogo de productos dinámico",
        "Conexión con Whatsapp",
        "Desarrollo rápido (5 dias)",
        "Diseño responsive"
      ],
      url:"https://ssianimportados.42web.io/?i=1"
    },

    {
      nombre: "Sistema De Biblioteca",
      descripcion: "Sistema para biblioteca que ofrece prestamos de sus libros, es un proyecto escolar que se pidio de rápida entrega",
      tecnologias: ["ASP.NET Core", "Blazor", "Entity Framework", "MVC", "SQL Server"],
      destacado: false,
      estado: "Completado",
      features: [
        "Sistema de prestamos",
        "Conexión con google cloud",
        "Desarrollo rápido ( 7 dias)",
        "Diseño responsive"
      ],
      url:"http://bibliotecaproyecto.somee.com"
    }
  ],

  habilidades: [
    {
      categoria: "Backend",
      icon: "Server",
      skills: ["ASP.NET Core", "PHP", "Entity Framework", "MVC", "MVVM"]
    },
    {
      categoria: "Frontend",
      icon: "Layout",
      skills: ["React", "HTML/CSS", "JavaScript", "Bootstrap", "Avalonia","Blazor"]
    },
    {
      categoria: "Bases de Datos",
      icon: "Database",
      skills: ["SQL Server", "MySQL", "PHPMyAdmin"]
    },
    {
      categoria: "Herramientas",
      icon: "Code2",
      skills: ["Git", "GitHub", "GitHub Desktop","Trello"]
    }
  ],

  exposiciones: [
    {
      lugar: "Universidad de Morón",
      descripcion: "Exposición de proyectos tecnológicos estudiantiles",
      icon: "Briefcase"
    },
    {
      lugar: "Universidad de La Matanza",
      descripcion: "Muestra de innovación tecnológica - Premio Innovación y Tecnología por Zinclas",
      icon: "Trophy"
    },
    {
      lugar: "Parque Industrial La Cantábrica",
      descripcion: "Expo de desarrollos industriales y tecnológicos",
      icon: "Award"
    }
  ]
};