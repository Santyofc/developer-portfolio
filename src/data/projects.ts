import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "zona-sur-tech",
    category: "Full Stack",
    tags: ["PHP", "MySQL", "Linux", "Apache"],
    image: "/placeholder.svg",
    link: "https://dev.zonasurtech.online",
    en: {
      title: "Zona Sur Tech Platform",
      description: "Premium infrastructure for modern software and digital security services.",
      fullDescription: "A comprehensive digital ecosystem built to bridge the gap between small business needs and high-security technical requirements. The platform serves as both a service showcase and a management engine.",
      problem: "Many small businesses need robust yet accessible web platforms to manage users and dynamic content securely.",
      solution: "I designed a web infrastructure with an integrated security system and a relational database for content scalability.",
      architecture: {
        frontend: "HTML5, CSS3, JavaScript (Core presentation)",
        backend: "PHP Core (Business Logic & Routing)",
        database: "MySQL (Relational Data Modeling)",
        infrastructure: "Linux / Apache (High-Availability Cloud)"
      },
      decisions: [
        {
          question: "Why PHP over Node.js for this case?",
          answer: "The proven stability of PHP 8.x in Apache environments provided the development speed needed for the Zona Sur Tech content engine, optimizing Time-to-Market without sacrificing security."
        }
      ],
      challenges: [
        {
          title: "Latency Optimization",
          description: "An aggressive caching layer and MySQL query optimization were implemented to reduce load time below 1.2 seconds."
        }
      ],
      learnings: [
        "Secure Authentication (SQL Injection / XSS)",
        "Persistent Session Management",
        "Relational Database Modeling",
        "Linux Server Hardening"
      ]
    },
    es: {
      title: "Plataforma Zona Sur Tech",
      description: "Infraestructura premium para servicios modernos de software y seguridad digital.",
      fullDescription: "Un ecosistema digital completo construido para cerrar la brecha entre las necesidades de las pequeñas empresas y los requisitos técnicos de alta seguridad. La plataforma sirve tanto como escaparate de servicios como motor de gestión.",
      problem: "Muchas pequeñas empresas necesitan plataformas web robustas pero accesibles para gestionar usuarios y contenido dinámico de forma segura.",
      solution: "Diseñé una infraestructura web con sistema de seguridad integrado y base de datos relacional para escalabilidad de contenido.",
      architecture: {
        frontend: "HTML5, CSS3, JavaScript (Presentación principal)",
        backend: "PHP Core (Lógica de negocio y enrutamiento)",
        database: "MySQL (Modelado de datos relacional)",
        infrastructure: "Linux / Apache (Nube de alta disponibilidad)"
      },
      decisions: [
        {
          question: "¿Por qué PHP sobre Node.js para este caso?",
          answer: "La estabilidad probada de PHP 8.x en entornos Apache proporcionó la velocidad de desarrollo necesaria para el motor de contenido de Zona Sur Tech, optimizando el Time-to-Market sin sacrificar seguridad."
        }
      ],
      challenges: [
        {
          title: "Optimización de Latencia",
          description: "Se implementó una capa de caché agresiva y optimización de queries en MySQL para reducir el tiempo de carga bajo 1.2 segundos."
        }
      ],
      learnings: [
        "Autenticación Segura (Inyección de SQL / XSS)",
        "Gestión de Sesiones Persistentes",
        "Modelado de Bases de Datos Relacionales",
        "Hardening de Servidores Linux"
      ]
    }
  },
  {
    id: "secure-auth",
    category: "Security",
    tags: ["Security", "PHP", "BCRYPT"],
    image: "/placeholder.svg",
    en: {
      title: "Secure Identity Engine",
      description: "Multi-layer identity management system hardened against modern attack vectors.",
      fullDescription: "An advanced authentication middleware designed to handle high-entropy password hashing, session hijacking protection, and role-based access control (RBAC).",
      problem: "Identity security is critical for digital platforms exposed to modern attack vectors like brute force and hijacking.",
      solution: "I implemented a hardened authentication engine with multi-layer validation and native protection against OWASP vulnerabilities.",
      architecture: {
        frontend: "Security-Driven UI (Minimal surface area)",
        backend: "PHP (Hardenized Auth Logic)",
        database: "MySQL (Encrypted User Data)",
        infrastructure: "Isolated Security Middleware"
      },
      decisions: [
        {
          question: "Why BCRYPT Implementation?",
          answer: "BCRYPT was selected with a dynamic cost factor to balance computational security against brute force attacks and login latency."
        }
      ],
      challenges: [
        {
          title: "Session Hijacking Mitigation",
          description: "Implementation of session ID rotation on every critical action and browser fingerprint validation."
        }
      ],
      learnings: [
        "OWASP Top 10 Vulnerability Mitigation",
        "Modern Cryptography Implementation",
        "Access Control Architectures (RBAC)",
        "Secure Identity Lifecycle"
      ]
    },
    es: {
      title: "Motor de Identidad Seguro",
      description: "Sistema de gestión de identidad multicapa reforzado contra vectores de ataque modernos.",
      fullDescription: "Un middleware de autenticación avanzado diseñado para manejar hashing de contraseñas de alta entropía, protección contra secuestro de sesiones y control de acceso basado en roles (RBAC).",
      problem: "La seguridad de identidad es crítica para plataformas digitales expuestas a vectores de ataque modernos como la fuerza bruta y el secuestro.",
      solution: "Implementé un motor de autenticación endurecido con validación multicapa y protección nativa contra vulnerabilidades de OWASP.",
      architecture: {
        frontend: "UI orientada a la seguridad (Área de superficie mínima)",
        backend: "PHP (Lógica de autenticación endurecida)",
        database: "MySQL (Datos de usuario encriptados)",
        infrastructure: "Middleware de seguridad aislado"
      },
      decisions: [
        {
          question: "¿Por qué la implementación de BCRYPT?",
          answer: "Se seleccionó BCRYPT con un factor de costo dinámico para equilibrar la seguridad computacional contra ataques de fuerza bruta y la latencia de inicio de sesión."
        }
      ],
      challenges: [
        {
          title: "Mitigación de Secuestro de Sesión",
          description: "Implementación de rotación de IDs de sesión en cada acción crítica y validación de huella digital del navegador."
        }
      ],
      learnings: [
        "Mitigación de vulnerabilidades OWASP Top 10",
        "Implementación de criptografía moderna",
        "Arquitecturas de control de acceso (RBAC)",
        "Ciclo de vida de identidad segura"
      ]
    }
  }
];
