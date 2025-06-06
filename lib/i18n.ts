export const translations = {
  en: {
    nav: {
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      title: "Creative Designer",
      subtitle: "Specializing in card presentations, social media, branding & visual identity",
      cta: "View My Work",
    },
    about: {
      title: "About Me",
      description:
        "I'm Sohany Galan, a passionate creative designer with expertise in card presentations, social media design, community management, branding, and promotional materials. I transform ideas into compelling visual experiences that connect with audiences and drive results.",
      skills: "My expertise includes:",
      skillsList: [
        "Card presentations & business cards",
        "Social media design & management",
        "Brand identity & visual systems",
        "Promotional materials & campaigns",
        "Digital & print design",
        "Community management",
      ],
    },
    portfolio: {
      title: "My Portfolio",
      subtitle: "Explore my creative projects",
      categories: {
        all: "All Projects",
        banners: "Banners Publicitarios",
        flyers: "Flyers Digitales e Impresos",
        cards: "Tarjetas de Presentación",
        catalogs: "Catálogos de Productos",
        social: "Publicaciones para Redes Sociales",
        packaging: "Etiquetas y Empaques Personalizados",
        mockups: "Mockups de Productos Personalizados",
        posters: "Posters o Afiches",
        presentations: "Portadas y Presentaciones de Proyectos",
      },
    },
    contact: {
      title: "What would you like me to design for you?",
      subtitle: "Tell me your idea",
      form: {
        name: "Name",
        email: "Email",
        projectType: "Project Type",
        description: "Project Description",
        submit: "Send Message",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again.",
      },
    },
  },
  es: {
    nav: {
      about: "Acerca de",
      portfolio: "Portafolio",
      contact: "Contacto",
    },
    hero: {
      title: "Diseñadora Creativa",
      subtitle: "Especializada en presentaciones de tarjetas, redes sociales, branding e identidad visual",
      cta: "Ver Mi Trabajo",
    },
    about: {
      title: "Acerca de Mí",
      description:
        "Soy Sohany Galan, una diseñadora creativa apasionada con experiencia en presentaciones de tarjetas, diseño para redes sociales, gestión de comunidades, branding y materiales promocionales. Transformo ideas en experiencias visuales convincentes que conectan con las audiencias y generan resultados.",
      skills: "Mi experiencia incluye:",
      skillsList: [
        "Presentaciones de tarjetas y tarjetas de presentación",
        "Diseño y gestión de redes sociales",
        "Identidad de marca y sistemas visuales",
        "Materiales promocionales y campañas",
        "Diseño digital e impreso",
        "Gestión de comunidades",
      ],
    },
    portfolio: {
      title: "Mi Portafolio",
      subtitle: "Explora mis proyectos creativos",
      categories: {
        all: "Todos los Proyectos",
        banners: "Banners Publicitarios",
        flyers: "Flyers Digitales e Impresos",
        cards: "Tarjetas de Presentación",
        catalogs: "Catálogos de Productos",
        social: "Publicaciones para Redes Sociales",
        packaging: "Etiquetas y Empaques Personalizados",
        mockups: "Mockups de Productos Personalizados",
        posters: "Posters o Afiches",
        presentations: "Portadas y Presentaciones de Proyectos",
      },
    },
    contact: {
      title: "¿Qué quieres que diseñe para ti?",
      subtitle: "Cuéntame tu idea",
      form: {
        name: "Nombre",
        email: "Correo Electrónico",
        projectType: "Tipo de Proyecto",
        description: "Descripción del Proyecto",
        submit: "Enviar Mensaje",
        success: "¡Mensaje enviado exitosamente!",
        error: "Error al enviar el mensaje. Por favor intenta de nuevo.",
      },
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
