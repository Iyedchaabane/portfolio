/**
 * Professional Experience Data
 * 
 * Contains detailed work history with projects, achievements, and technologies.
 * Each experience includes:
 * - Basic info: id, title, company, companyWebsite, duration
 * - description: Detailed overview of the role
 * - technologies: Array of technologies used
 * - projects: Detailed project information with challenges and impacts
 * - achievements: Key accomplishments
 */
export const experiences = [
  {
    id: 1,
    title: 'Full Stack Software Engineer',
    company: "Kopileft Services",
    companyWebsite: "http://www.kopileft.com/",
    duration: "(Nov 2023 - Present)",
    description: "Designing and deploying high-availability Point of Sale (POS) solutions across multiple sites using Java/Spring Boot. Leading API architecture implementation and microservices communication while driving test automation initiatives that reduced production time by 40%.",
    descriptionFr: "Concevoir et déployer des solutions Point de Vente (PDV) haute disponibilité (multi-sites) en Java / Spring Boot. Diriger l'architecture des API et la communication microservices tout en pilotant l'automatisation des tests, réduisant de 40% le temps de mise en production.",
    technologies: [
      'Java 17', 'Java 8', 'Spring Boot', 'Kotlin', 'Angular', 'React',
      'Python', 'Fast API', 'JMS', 'ActiveMQ', 'Exposed', 'PostgreSQL',
      'REST API', 'SOAP', 'JUnit', 'Mockk', 'Docker', 'Git', 'CI/CD',
      'Linux', 'Agile Scrum'
    ],
    projects: [
      {
        name: "High-Availability Multi-Site POS Solutions",
        nameFr: "Solutions PDV Multi-Sites Haute Disponibilité",
        description: "Designed and deployed enterprise-level Point of Sale systems with inventory management, customer loyalty programs, and payment synchronization across multiple sites.",
        descriptionFr: "Concevoir et déployer des solutions Point de Vente (PDV) haute disponibilité incluant la gestion des stocks, la fidélité et la synchronisation des paiements.",
        challenges: [
          "Ensuring data consistency across distributed systems",
          "Handling network failures and system resilience",
          "Real-time synchronization of inventory and transactions"
        ],
        solutions: [
          "Implemented event-driven architecture using JMS and ActiveMQ for reliable inter-service communication",
          "Designed offline-first approach with automatic sync when connection restored",
          "Created comprehensive monitoring and alerting system"
        ],
        impact: "Successfully deployed across multiple retail locations with 99.9% uptime, processing thousands of daily transactions."
      },
      {
        name: "REST & SOAP API Architecture",
        nameFr: "Architecture API REST & SOAP",
        description: "Architected and implemented robust APIs using Java/Spring Boot and Python/Fast API for communication with central systems.",
        descriptionFr: "Architecturer et implémenter des API REST et SOAP en Java / Spring Boot et Python / Fast API pour la communication avec les systèmes centraux.",
        challenges: [
          "Integration with legacy SOAP services while building modern REST APIs",
          "Ensuring API performance and scalability",
          "Maintaining backward compatibility"
        ],
        solutions: [
          "Created adapter pattern to bridge SOAP and REST architectures",
          "Implemented comprehensive API versioning strategy",
          "Added caching and rate limiting for optimal performance"
        ],
        impact: "Reduced API response times by 60% and enabled seamless integration with 15+ external systems."
      },
      {
        name: "Test Automation & CI/CD Pipeline",
        nameFr: "Automatisation des Tests & Pipeline CI/CD",
        description: "Led automation of integration and validation tests using JUnit, Mockk, and Docker, significantly reducing production deployment time.",
        descriptionFr: "Piloté l'automatisation des tests d'intégration et de validation (JUnit, Mockk, Docker), réduisant de 40% le temps de mise en production.",
        impact: "Achieved 40% reduction in production deployment time, increased test coverage to 85%, and eliminated 90% of manual testing."
      }
    ],
    achievements: [
      "Reduced production deployment time by 40% through test automation",
      "Architected high-availability POS system serving multiple retail locations",
      "Successfully integrated 15+ external systems via REST and SOAP APIs",
      "Led front-end integration with Angular and React components",
      "Maintained 99.9% system uptime across distributed infrastructure"
    ],
    teamSize: "6 people"
  },
  {
    id: 2,
    title: "Full Stack Developer (Internship - PFE)",
    company: "Enova Robotics",
    companyWebsite: "https://www.enovarobotics.eu/",
    duration: "(Feb 2023 - Jun 2023)",
    description: "Created and developed a real-time multi-robot monitoring system for diagnostics and tracking. Implemented automated reporting features and maintained historical data in MongoDB for trend analysis and performance tracking.",
    descriptionFr: "Créer et développer un système de supervision multi-robots en temps réel pour le diagnostic et le suivi. Implémenter des fonctionnalités de reporting automatisé et maintenir des données historiques en MongoDB.",
    technologies: [
      'React', 'Spring Boot', 'WebSocket', 'MongoDB', 'JSON',
      'REST API', 'Real-time Systems', 'Scrum'
    ],
    projects: [
      {
        name: "Real-Time Multi-Robot Monitoring System",
        nameFr: "Système de Supervision Multi-Robots en Temps Réel",
        description: "Developed a comprehensive monitoring application enabling real-time diagnostics and tracking of multiple robots simultaneously with automated reporting and historical data analysis.",
        descriptionFr: "Créer et développer un système de supervision multi-robots en temps réel pour le diagnostic et le suivi avec reporting automatisé et analyse historique.",
        challenges: [
          "Managing real-time data streams from multiple robots",
          "Ensuring low-latency communication",
          "Storing and querying large volumes of time-series data",
          "Creating intuitive visualizations for complex robot states"
        ],
        solutions: [
          "Implemented WebSocket connections for real-time bidirectional communication",
          "Designed efficient MongoDB schema optimized for time-series data",
          "Created React dashboard with live updates and historical trend charts",
          "Built automated alert system for anomaly detection"
        ],
        impact: "Enabled operators to monitor fleet of robots in real-time, reducing incident response time by 70% and improving overall robot performance through data-driven insights."
      }
    ],
    achievements: [
      "Built production-ready real-time monitoring system from scratch",
      "Reduced incident response time by 70% through real-time diagnostics",
      "Implemented automated reporting saving 10+ hours weekly of manual work",
      "Designed scalable MongoDB architecture handling millions of data points",
      "Created intuitive UI enabling non-technical users to monitor robot fleet"
    ]
  },
  {
    id: 3,
    title: "Software Engineering Intern",
    company: "Abajim",
    companyWebsite: "https://abajim.com/",
    duration: "(Jul 2022 - Aug 2022)",
    description: "Developed a comprehensive interactive educational platform with user authentication and content management. Implemented robust JWT-based security mechanisms to ensure data protection.",
    descriptionFr: "Développer une plateforme éducative interactive complète avec gestion de l'authentification utilisateur et du contenu. Implémenter des mécanismes de sécurité robustes basés sur les jetons JWT.",
    technologies: [
      'Spring Boot', 'React', 'JWT', 'MySQL',
      'REST API', 'Authentication', 'Security'
    ],
    projects: [
      {
        name: "Interactive Educational Platform",
        nameFr: "Plateforme Éducative Interactive",
        description: "Created a full-featured e-learning platform with secure user authentication, content management, and interactive learning modules.",
        descriptionFr: "Développer une plateforme éducative interactive complète avec gestion de l'authentification utilisateur et du contenu sécurisé.",
        challenges: [
          "Implementing secure authentication and authorization",
          "Managing different user roles (students, teachers, admins)",
          "Protecting sensitive educational content",
          "Creating responsive and accessible UI"
        ],
        solutions: [
          "Implemented JWT-based authentication with refresh token mechanism",
          "Created role-based access control (RBAC) system",
          "Designed secure API endpoints with proper validation",
          "Built responsive React components for optimal user experience"
        ],
        impact: "Platform successfully deployed for educational institution, serving students and teachers with secure access to learning materials."
      }
    ],
    achievements: [
      "Developed full-stack educational platform in 2-month internship",
      "Implemented comprehensive JWT-based security architecture",
      "Created role-based access control for multiple user types",
      "Built responsive UI supporting desktop and mobile devices",
      "Delivered production-ready application adopted by educational institution"
    ]
  },
  {
    id: 4,
    title: "Self Employed",
    company: "Code and build something everyday.",
    duration: "(Jan 2020 - Present)",
    description: "Continuously learning and building projects to enhance skills across the full stack. Experimenting with new technologies, contributing to open source, and staying current with industry best practices.",
    descriptionFr: "Apprentissage continu et développement de projets pour améliorer les compétences full stack. Expérimentation de nouvelles technologies et contribution open source.",
    technologies: [
      'Java', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Spring Boot',
      'Node.js', 'Python', 'Docker', 'Git', 'Various Databases'
    ],
    projects: [],
    achievements: [
      "Built portfolio of personal projects demonstrating diverse skills",
      "Consistent learning and skill development across multiple technologies",
      "Stayed current with latest development trends and best practices"
    ]
  }
];
