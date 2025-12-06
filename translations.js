const translations = {
  pt: {
    // Traduzindo para PTBR EN e FR navegação
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.technologies": "Tecnologias",
    "nav.projects": "Projetos",
    "nav.certificates": "Cursos",
    "nav.contact": "Contato",

    // Traduzindo para PTBR EN e FR seção hero
    "hero.title": "Natan Da Luz",
    "hero.subtitle": "Desenvolvedor Fullstack",
    "meta.title": "Natan Da Luz - Desenvolvedor Fullstack",
    "hero.cta.cv": "Download Currículo",
    "meta.description":
      "Desenvolvedor Fullstack com projetos reais: Sistema PetShop, Barbearia e Tatuagem. Especialista em React, Laravel, PHP, JavaScript, MySQL e Docker",
    "hero.cta.contact": "Vamos Conversar",

    // Traduzindo para PTBR EN e FR sobre seção
    "about.title": "Sobre Mim",
    "about.intro":
      "Sou Natan Da Luz, Desenvolvedor Full Stack com experiência prática em JavaScript (React) e PHP (Laravel). Tenho como foco a construção de aplicações modernas, funcionais e escaláveis, sempre priorizando desempenho, organização, boas práticas de desenvolvimento e uma experiência de usuário clara e eficiente.\n\nAtualmente curso Sistemas de Informação e aplico meu conhecimento em projetos reais, atuando com PHP/Laravel, JavaScript/React, MySQL/SQL, além de possuir experiência com Git, GitHub e Docker (em constante aprimoramento).\n\nEntre os projetos que já desenvolvi, destacam-se:\n• Websites profissionais para Barbeiro Especial T.E.A e um Estúdio de Tatuagem, com foco em performance, identidade visual e integrações com WhatsApp e Google Maps.\n• Sistema completo para Pet Shop, incluindo autenticação, dashboard administrativo e backend seguro e bem estruturado.\n• Integrações com APIs REST, desenvolvimento de interfaces responsivas e criação de fluxos completos no frontend e backend.\n\nBusco uma oportunidade como Desenvolvedor Júnior ou Estagiário, onde eu possa aplicar meus conhecimentos em projetos reais, contribuir com soluções de qualidade e seguir evoluindo como profissional dentro de uma equipe de tecnologia.",

    // Traduzindo para PTBR EN e FR Soft Skills
    "about.softSkills.title": "Soft Skills",
    "about.softSkills.teamwork": "Trabalho em equipe",
    "about.softSkills.communication": "Boa comunicação",
    "about.softSkills.problemSolving": "Resolução de problemas",
    "about.softSkills.agility": "Agilidade",
    "about.softSkills.adaptability": "Adaptabilidade",
    "about.softSkills.proactivity": "Proatividade",

    // Traduzindo para PTBR EN e FR Idiomas
    "about.languages.title": "Idiomas",
    "about.languages.portuguese": "Português",
    "about.languages.english": "Inglês",
    "about.languages.french": "Francês",

    // Traduzindo para PTBR EN e FR seção de tecnologias
    "technologies.title": "Tecnologias",
    "technologies.frontend": "Frontend",
    "technologies.frontend.description":
      "Desenvolvimento de interfaces modernas e responsivas, criando experiências de usuário excepcionais com as melhores práticas de design web.",
    "technologies.backend": "Backend",
    "technologies.backend.description":
      "Construção de sistemas robustos e escaláveis, desenvolvendo APIs eficientes e gerenciando dados com segurança e performance.",
    "technologies.tools": "Ferramentas",
    "technologies.tools.description":
      "Controle de versão e colaboração em projetos, garantindo qualidade e organização no desenvolvimento de software.",

    // Traduzindo para PTBR EN e FR seção projetos
    "projects.title": "Projetos",
    "projects.petshop.title":
      "Sistema de PetShop — Plataforma Completa de Agendamentos e Gestão",
    "projects.petshop.type": "Sistema Fullstack",
    "projects.petshop.description":
      "Desenvolvi um sistema fullstack para petshops e clínicas veterinárias, incluindo CRUD completo, agendamento, dashboard interativo e check-in rápido. A versão profissional recebeu melhorias robustas no backend, segurança reforçada (bcrypt, prepared statements, proteção XSS) e scripts automáticos de instalação e teste. Projeto focado em desempenho, confiabilidade e boa experiência para o usuário.",
    "projects.petshop.feature1": "CRUD Completo",
    "projects.petshop.feature2": "Dashboard Interativo",
    "projects.petshop.feature3": "Segurança Reforçada",

    "projects.reddead.title": "Red Dead Redemption 2",
    "projects.reddead.type": "Website Acadêmico",
    "projects.reddead.description":
      "Website responsivo com tema do jogo Red Dead Redemption 2, desenvolvido com HTML, CSS e JavaScript. Inclui animações, efeitos visuais e design moderno.",
    "projects.reddead.feature1": "Design responsivo",
    "projects.reddead.feature2": "Animações CSS",
    "projects.reddead.feature3": "Hospedado no Vercel",
    "projects.barber.title":
      "CorteAzulTea – Website para barbearia especializada",
    "projects.barber.type": "Website Profissional",
    "projects.barber.description":
      "Website para barbearia especializada em atendimento humanizado para crianças com TEA (Transtorno do Espectro Autista). Site moderno, responsivo e otimizado que transmite confiança e facilita o contato com as famílias.",
    "projects.barber.feature1": "Atendimento especializado",
    "projects.barber.feature2": "PWA configurado",
    "projects.barber.feature3": "Integração WhatsApp",
    "projects.tattoo.title": "Marcos Garcia Tattoo – Website",
    "projects.tattoo.type": "Website Profissional",
    "projects.tattoo.description":
      "Website responsivo, moderno e alinhado à identidade visual do cliente, destacando seu estilo único e facilitando a conexão com novos clientes. Inclui portfólio filtrado por categorias, depoimentos reais e integração direta com WhatsApp e Instagram.",
    "projects.tattoo.feature1": "Portfólio filtrado",
    "projects.tattoo.feature2": "Integração WhatsApp",
    "projects.tattoo.feature3": "Google Maps",
    "projects.amazon.title": "Amazon Scraper – Full-stack",
    "projects.amazon.type": "Aplicação Web",
    "projects.amazon.description":
      "Aplicação web moderna para busca de produtos na Amazon. Interface responsiva com funcionalidades de busca avançada, filtros e comparação de preços. Desenvolvido com tecnologias full-stack para demonstrar habilidades em desenvolvimento completo.",
    "projects.amazon.feature1": "Busca de produtos",
    "projects.amazon.feature2": "Interface moderna",
    "projects.amazon.feature3": "Multi-dispositivo",
    "projects.viewMore": "Ver mais projetos",

    // Traduzindo para PTBR EN e FR seção certificados
    "certificates.title": "Cursos",
    "certificates.algorithm.title": "Algoritmo e Lógica de Programação",
    "certificates.algorithm.description":
      "Fundamentos essenciais de programação e lógica computacional.",
    "certificates.htmlcss.title": "HTML e CSS Completo",
    "certificates.htmlcss.description":
      "Desenvolvimento web completo com HTML5 e CSS3.",
    "certificates.javascript.title":
      "JavaScript Algoritmos e Estruturas de Dados",
    "certificates.javascript.description":
      "Programação avançada em JavaScript com foco em algoritmos.",

    // Traduzindo para PTBR EN e FR seção contato
    "contact.title": "Contato",
    "contact.description":
      "Estou sempre aberto a novas oportunidades e colaborações. Entre em contato comigo através dos canais abaixo.",
    "contact.social.title": "Conecte-se Comigo",
    "contact.email": "Enviar email",
    "contact.email.aria": "Enviar email para Natan Da Luz",
    "contact.linkedin": "LinkedIn",
    "contact.linkedin.aria": "Abrir perfil do LinkedIn de Natan Da Luz",
    "contact.github": "GitHub",
    "contact.github.aria": "Abrir repositório do GitHub de Natan Da Luz",

    // Traduzindo para PTBR EN e FR seção Footer
    "footer.rights": "Todos os direitos reservados.",
    "footer.credit": "Portfólio Desenvolvido e Criado por Natan Da Luz",
    "backToTop.aria": "Voltar ao topo",
    "loading.text": "Carregando...",
    "project.github.title": "Ver código no GitHub",
    "project.linkedin.title": "Ver demonstração no LinkedIn",
    "project.github.aria": "Abrir repositório no GitHub",
    "project.linkedin.aria": "Abrir demonstração no LinkedIn",
  },

  en: {
    // Traduzindo para PTBR EN e FR navegação
    "nav.home": "Home",
    "nav.about": "About",
    "nav.technologies": "Technologies",
    "nav.projects": "Projects",
    "nav.certificates": "Certificates",
    "nav.contact": "Contact",

    // Traduzindo para PTBR EN e FR seção hero
    "hero.title": "Natan Da Luz",
    "hero.subtitle": "Fullstack Developer",
    "meta.title": "Natan Da Luz - Fullstack Developer",
    "hero.cta.cv": "Download CV",
    "meta.description":
      "Fullstack developer with real projects: PetShop system, Barbershop and Tattoo studio. Experienced in React, Laravel, PHP, JavaScript, MySQL and Docker",
    "hero.cta.contact": "Let's Talk",

    // Traduzindo para PTBR EN e FR sobre seção
    "about.title": "About Me",
    "about.intro":
      "I'm Natan Da Luz, a Full Stack Developer with hands-on experience in JavaScript (React) and PHP (Laravel). I focus on building modern, functional, and scalable applications, always prioritizing performance, organization, development best practices, and a clear, efficient user experience.\n\nI am currently studying Information Systems and apply my knowledge to real projects, working with PHP/Laravel, JavaScript/React, MySQL/SQL, and I have experience with Git, GitHub and Docker (continuously improving).\n\nAmong the projects I've developed are:\n• Professional websites for a specialized barber service (CorteAzulTea) and a tattoo studio, emphasizing performance, visual identity, and integrations with WhatsApp and Google Maps.\n• A complete Pet Shop system, including authentication, admin dashboard and a secure, well-structured backend.\n• REST API integrations, responsive interface development and end-to-end frontend and backend flows.\n\nI'm seeking a Junior Developer or Intern position where I can apply my knowledge to real projects, contribute quality solutions and continue growing as a professional within a technology team.",

    // Traduzindo para PTBR EN e FR Soft Skills
    "about.softSkills.title": "Soft Skills",
    "about.softSkills.teamwork": "Teamwork",
    "about.softSkills.communication": "Good communication",
    "about.softSkills.problemSolving": "Problem solving",
    "about.softSkills.agility": "Agility",
    "about.softSkills.adaptability": "Adaptability",
    "about.softSkills.proactivity": "Proactivity",

    // Traduzindo para PTBR EN e FR Idiomas
    "about.languages.title": "Languages",
    "about.languages.portuguese": "Portuguese",
    "about.languages.english": "English",
    "about.languages.french": "French",

    // Traduzindo para PTBR EN e FR seção de tecnologias
    "technologies.title": "Technologies",
    "technologies.frontend": "Frontend",
    "technologies.frontend.description":
      "Development of modern and responsive interfaces, creating exceptional user experiences with the best web design practices.",
    "technologies.backend": "Backend",
    "technologies.backend.description":
      "Building robust and scalable systems, developing efficient APIs and managing data with security and performance.",
    "technologies.tools": "Tools",
    "technologies.tools.description":
      "Version control and collaboration on projects, ensuring quality and organization in software development.",

    // Traduzindo para PTBR EN e FR seção projetos
    "projects.title": "Projects",
    "projects.petshop.title": "Complete PetShop System",
    "projects.petshop.type": "Fullstack System",
    "projects.petshop.description":
      "Appointment and management system for pet shops and veterinary clinics. Initial launch with CRUD, appointments and dashboard; professional revision with refactored backend, enhanced security (bcrypt, prepared statements, XSS), quick check-in, interactive dashboard and automatic installation/test scripts.",
    "projects.petshop.feature1": "Complete CRUD",
    "projects.petshop.feature2": "Interactive Dashboard",
    "projects.petshop.feature3": "Enhanced Security",

    "projects.reddead.title": "Red Dead Redemption 2",
    "projects.reddead.type": "Academic Website",
    "projects.reddead.description":
      "Responsive website with Red Dead Redemption 2 game theme, developed with HTML, CSS and JavaScript. Includes animations, visual effects and modern design.",
    "projects.reddead.feature1": "Responsive design",
    "projects.reddead.feature2": "CSS animations",
    "projects.reddead.feature3": "Hosted on Vercel",
    "projects.barber.title": "CorteAzulTea – Specialized barbershop website",
    "projects.barber.type": "Professional Website",
    "projects.barber.description":
      "Website for barbershop specialized in humanized care for children with ASD (Autism Spectrum Disorder). Modern, responsive and optimized site that conveys trust and facilitates contact with families.",
    "projects.barber.feature1": "Specialized care",
    "projects.barber.feature2": "PWA configured",
    "projects.barber.feature3": "WhatsApp integration",
    "projects.tattoo.title": "Marcos Garcia Tattoo – Website",
    "projects.tattoo.type": "Professional Website",
    "projects.tattoo.description":
      "Responsive, modern website aligned with the client's visual identity, highlighting their unique style and facilitating connection with new clients. Includes portfolio filtered by categories, real testimonials and direct integration with WhatsApp and Instagram.",
    "projects.tattoo.feature1": "Filtered portfolio",
    "projects.tattoo.feature2": "WhatsApp integration",
    "projects.tattoo.feature3": "Google Maps",
    "projects.amazon.title": "Amazon Scraper – Full-stack",
    "projects.amazon.type": "Web Application",
    "projects.amazon.description":
      "Modern web application for Amazon product search. Responsive interface with advanced search features, filters and price comparison. Developed with full-stack technologies to demonstrate complete development skills.",
    "projects.amazon.feature1": "Product search",
    "projects.amazon.feature2": "Modern interface",
    "projects.amazon.feature3": "Multi-device",
    "projects.viewMore": "View more projects",

    // Traduzindo para PTBR EN e FR seção certificados
    "certificates.title": "Certificates",
    "certificates.algorithm.title": "Algorithm and Programming Logic",
    "certificates.algorithm.description":
      "Essential programming fundamentals and computational logic.",
    "certificates.htmlcss.title": "Complete HTML and CSS",
    "certificates.htmlcss.description":
      "Complete web development with HTML5 and CSS3.",
    "certificates.javascript.title":
      "JavaScript Algorithms and Data Structures",
    "certificates.javascript.description":
      "Advanced JavaScript programming with focus on algorithms.",

    // Traduzindo para PTBR EN e FR seção contato
    "contact.title": "Contact",
    "contact.description":
      "I'm always open to new opportunities and collaborations. Get in touch with me through the channels below.",
    "contact.social.title": "Connect With Me",
    "contact.email": "Send email",
    "contact.email.aria": "Send an email to Natan Da Luz",
    "contact.linkedin": "LinkedIn",
    "contact.linkedin.aria": "Open Natan Da Luz's LinkedIn profile",
    "contact.github": "GitHub",
    "contact.github.aria": "Open Natan Da Luz's GitHub repository",

    // Traduzindo para PTBR EN e FR Footer
    "footer.rights": "All rights reserved.",
    "footer.credit": "Portfolio developed and created by Natan Da Luz",
    "backToTop.aria": "Back to top",
    "loading.text": "Loading...",
    "project.github.title": "View code on GitHub",
    "project.linkedin.title": "View demo on LinkedIn",
    "project.github.aria": "Open repository on GitHub",
    "project.linkedin.aria": "Open demo on LinkedIn",
  },

  fr: {
    // Traduzindo para PTBR EN e FR navegação
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.technologies": "Technologies",
    "nav.projects": "Projets",
    "nav.certificates": "Certificats",
    "nav.contact": "Contact",

    // Traduzindo para PTBR EN e FR seção hero
    "hero.title": "Natan Da Luz",
    "hero.subtitle": "Développeur Fullstack",
    "meta.title": "Natan Da Luz - Développeur Fullstack",
    "hero.cta.cv": "Télécharger CV",
    "meta.description":
      "Développeur Fullstack avec des projets réels : système PetShop, barbier et studio de tatouage. Expérimenté en React, Laravel, PHP, JavaScript, MySQL et Docker",
    "hero.cta.contact": "Parlons",

    // Traduzindo para PTBR EN e FR seção sobre
    "about.title": "À Propos de Moi",
    "about.intro":
      "Je suis Natan Da Luz, développeur Full Stack avec une expérience pratique en JavaScript (React) et PHP (Laravel). Je me consacre à la conception d'applications modernes, fonctionnelles et évolutives, en donnant toujours la priorité aux performances, à l'organisation, aux bonnes pratiques de développement et à une expérience utilisateur claire et efficace.\n\nActuellement, j'étudie les Systèmes d'Information et j'applique mes connaissances à des projets réels, travaillant avec PHP/Laravel, JavaScript/React, MySQL/SQL, et j'ai de l'expérience avec Git, GitHub et Docker (en amélioration continue).\n\nParmi les projets que j'ai développés, on peut citer :\n• Sites web professionnels pour un service de barbier spécialisé T.E.A et un studio de tatouage, axés sur la performance, l'identité visuelle et les intégrations avec WhatsApp et Google Maps.\n• Système complet pour Pet Shop, incluant authentification, tableau de bord administratif et backend sécurisé et bien structuré.\n• Intégrations avec des API REST, développement d'interfaces réactives et création de flux complets front-end et back-end.\n\nJe recherche une opportunité en tant que développeur junior ou stagiaire, où je pourrai appliquer mes connaissances à des projets réels, contribuer par des solutions de qualité et continuer à évoluer en tant que professionnel au sein d'une équipe technologique.",

    // Traduzindo para PTBR EN e FR Soft Skills
    "about.softSkills.title": "Compétences Douces",
    "about.softSkills.teamwork": "Travail d'équipe",
    "about.softSkills.communication": "Bonne communication",
    "about.softSkills.problemSolving": "Résolution de problèmes",
    "about.softSkills.agility": "Agilité",
    "about.softSkills.adaptability": "Adaptabilité",
    "about.softSkills.proactivity": "Proactivité",

    // Traduzindo para PTBR EN e FR Idiomas
    "about.languages.title": "Langues",
    "about.languages.portuguese": "Portugais",
    "about.languages.english": "Anglais",
    "about.languages.french": "Français",

    // Traduzindo para PTBR EN e FR seção tecnologias
    "technologies.title": "Technologies",
    "technologies.frontend": "Frontend",
    "technologies.frontend.description":
      "Développement d'interfaces modernes et responsives, créant des expériences d'utilisateur exceptionnelles avec les meilleures pratiques de design web.",
    "technologies.backend": "Backend",
    "technologies.backend.description":
      "Construction de systèmes robustes et évolutifs, développement d'API efficaces et gestion des données avec sécurité et performance.",
    "technologies.tools": "Outils",
    "technologies.tools.description":
      "Contrôle de version et collaboration sur les projets, garantissant la qualité et l'organisation dans le développement du logiciel.",

    // Traduzindo para PTBR EN e FR seção projetos
    "projects.title": "Projets",
    "projects.petshop.title": "Système Complet de PetShop",
    "projects.petshop.type": "Système Fullstack",
    "projects.petshop.description":
      "Système de prise de rendez-vous et de gestion pour animaleries et cliniques vétérinaires. Lancement initial avec CRUD, rendez-vous et tableau de bord ; version professionnelle révisée avec backend refactorisé, sécurité renforcée (bcrypt, prepared statements, XSS), check-in rapide, tableau de bord interactif et scripts d'installation/test automatiques.",
    "projects.petshop.feature1": "CRUD Complet",
    "projects.petshop.feature2": "Tableau de Bord Interactif",
    "projects.petshop.feature3": "Sécurité Renforcée",

    "projects.reddead.title": "Red Dead Redemption 2",
    "projects.reddead.type": "Site Web Académique",
    "projects.reddead.description":
      "Site web responsif avec le thème du jeu Red Dead Redemption 2, développé avec HTML, CSS et JavaScript. Inclut des animations, des effets visuels et un design moderne.",
    "projects.reddead.feature1": "Design responsif",
    "projects.reddead.feature2": "Animations CSS",
    "projects.reddead.feature3": "Hébergé sur Vercel",
    "projects.barber.title": "CorteAzulTea – Site web de barbier spécialisé",
    "projects.barber.type": "Site Web Professionnel",
    "projects.barber.description":
      "Site web pour barbier spécialisé dans les soins humanisés pour enfants avec TSA (Trouble du Spectre Autistique). Site moderne, responsif et optimisé qui transmet la confiance et facilite le contact avec les familles.",
    "projects.barber.feature1": "Soins spécialisés",
    "projects.barber.feature2": "PWA configuré",
    "projects.barber.feature3": "Intégration WhatsApp",
    "projects.tattoo.title": "Marcos Garcia Tattoo – Site Web",
    "projects.tattoo.type": "Site Web Professionnel",
    "projects.tattoo.description":
      "Site web responsif et moderne aligné sur l'identité visuelle du client, mettant en valeur son style unique et facilitant la connexion avec de nouveaux clients. Inclut un portfolio filtré par catégories, des témoignages réels et une intégration directe avec WhatsApp et Instagram.",
    "projects.tattoo.feature1": "Portfolio filtré",
    "projects.tattoo.feature2": "Intégration WhatsApp",
    "projects.tattoo.feature3": "Google Maps",
    "projects.amazon.title": "Amazon Scraper – Full-stack",
    "projects.amazon.type": "Application Web",
    "projects.amazon.description":
      "Application web moderne pour la recherche de produits sur Amazon. Interface responsive avec fonctionnalités de recherche avancée, filtres et comparaison de prix. Développé avec des technologies full-stack pour démontrer des compétences de développement complet.",
    "projects.amazon.feature1": "Recherche de produits",
    "projects.amazon.feature2": "Interface moderne",
    "projects.amazon.feature3": "Multi-appareil",
    "projects.viewMore": "Voir plus de projets",

    // Traduzindo para PTBR EN e FR seção certificados
    "certificates.title": "Certificats",
    "certificates.algorithm.title": "Algorithme et Logique de Programmation",
    "certificates.algorithm.description":
      "Fondamentaux essentiels de programmation et logique computationnelle.",
    "certificates.htmlcss.title": "HTML et CSS Complet",
    "certificates.htmlcss.description":
      "Développement web complet avec HTML5 et CSS3.",
    "certificates.javascript.title":
      "JavaScript Algorithmes et Structures de Données",
    "certificates.javascript.description":
      "Programmation JavaScript avancée avec focus sur les algorithmes.",

    // Traduzindo para PTBR EN e FR seção contato para idioma
    "contact.title": "Contact",
    "contact.description":
      "Je suis toujours ouvert aux nouvelles opportunités et collaborations. Contactez-moi via les canaux ci-dessous.",
    "contact.social.title": "Connectez-vous Avec Moi",
    "contact.email": "Envoyer un email",
    "contact.email.aria": "Envoyer un email à Natan Da Luz",
    "contact.linkedin": "LinkedIn",
    "contact.linkedin.aria": "Ouvrir le profil LinkedIn de Natan Da Luz",
    "contact.github": "GitHub",
    "contact.github.aria": "Ouvrir le dépôt GitHub de Natan Da Luz",

    // Traduzindo para PTBR EN e FR seção Footer
    "footer.rights": "Tous droits réservés.",
    "footer.credit": "Portfolio développé et créé par Natan Da Luz",
    "backToTop.aria": "Retour en haut",
    "loading.text": "Chargement...",
    "project.github.title": "Voir le code sur GitHub",
    "project.linkedin.title": "Voir la démo sur LinkedIn",
    "project.github.aria": "Ouvrir le dépôt sur GitHub",
    "project.linkedin.aria": "Ouvrir la démo sur LinkedIn",
  },
};
