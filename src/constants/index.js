export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  { id: 3, name: "Projects", href: "#projects" },
  {
    id: 4,
    name: "Work",
    href: "#work",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title:
      "Projet de Fin d’Études: Développement d’une Application de Comptage de Personnes",
    desc: "Développé un système de comptage de personnes en temps réel pour le commerce de détail.",
    subdesc:
      "Utilized YOLOv8, OpenVINO, BoT-SORT, Angular, Strapi, Python, Typescript, Docker, Kubernetes, MongoDB, PostgreSQL and Jenkins.",
    logo: "/assets/project-logo10.png",
    logoStyle: {
      backgroundColor: "#F0F0F0",
      border: "0.2px solid #CCCCCC",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.1)",
    },
    spotlight: "/assets/spotlight10.png",
    tags: [
      {
        id: 1,
        name: "Machine Learning",
        path: "/assets/machine_learning.svg",
      },
      { id: 2, name: "Python", path: "/assets/python.svg" },
      { id: 3, name: "Tensorflow", path: "/assets/tensorflow.svg" },
      { id: 4, name: "Docker", path: "/assets/Docker.svg" },
      { id: 5, name: "Kubernetes", path: "/assets/kubernetes-icon.svg" },
      { id: 6, name: "Typescript", path: "/assets/typescript.png" },
      { id: 7, name: "AngularJS", path: "/assets/AngularJS.svg" },
      { id: 8, name: "MongoDB", path: "/assets/MongoDB.svg" },
      { id: 9, name: "PostgresSQL", path: "/assets/PostgresSQL.svg" },
      { id: 10, name: "Jenkins", path: "/assets/Jenkins.svg" },
    ],
  },
  {
    title: "Pithos Global Technology OWS - Test Infrastructure Configuration",
    desc: "Configured a test infrastructure using Ansible to automate the deployment of Helm, kubectl, and Docker on a Terraform instance.",
    subdesc:
      "Utilized Terraform and Ansible for efficient automation and deployment processes.",
    href: "https://gitlab.com/chaimaZH/ansible/-/tree/chzahani_ansible?ref_type=heads",
    logo: "/assets/PGT.png",
    logoStyle: {
      backgroundColor: "#E0E0E0",
      border: "0.2px solid #CCCCCC",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.1)",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "Terraform", path: "/assets/terraform-svgrepo-com.svg" },
      { id: 2, name: "Ansible", path: "/assets/ansible-svgrepo-com.svg" },
    ],
  },
  {
    title:
      "Pithos Global Technology OWS - Deployment Automation with GitLab CI",
    desc: "Automated the deployment of a microservices application through a GitLab CI pipeline.",
    subdesc:
      "Leveraged Helm, Helmfile, GitLab CI, Kubernetes, and Docker Hub for seamless deployment.",
    logo: "/assets/PGT.png",
    logoStyle: {
      backgroundColor: "#F5F5F5",
      border: "0.2px solid #CCCCCC",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.1)",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "GitLab CI", path: "/assets/gitlab.svg" },
      { id: 2, name: "Kubernetes", path: "/assets/kubernetes-icon.svg" },
      { id: 3, name: "Helm", path: "/assets/Helm.svg" },
      { id: 4, name: "Docker", path: "/assets/Docker.svg" },
    ],
  },
  {
    title: "Vita",
    desc: "Création d’un site web dynamique représentant un blog sur le style de vie.",
    subdesc: "Utilized PHP, jQuery, HTML, CSS, JavaScript, and MySQL.",
    href: "https://github.com/ChaimaZahani/Vita",
    logo: "/assets/vita.jpg",
    logoStyle: {
      backgroundColor: "#F0F0F0",
      border: "0.2px solid #CCCCCC",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.1)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "PHP", path: "/assets/php-svgrepo-com.svg" },
      { id: 2, name: "jQuery", path: "/assets/jQuery.svg" },
      { id: 3, name: "HTML", path: "/assets/HTML5.svg" },
      { id: 4, name: "CSS", path: "/assets/CSS3.svg" },
      { id: 5, name: "JavaScript", path: "/assets/JavaScript.svg" },
      { id: 6, name: "MySQL", path: "/assets/mysql-logo-svgrepo-com.svg" },
    ],
  },
  {
    title: "Yamifood Restaurant",
    desc: "Développement d’un site web pour la gestion des réservations dans un restaurant.",
    subdesc: "Utilized HTML, CSS, JEE, and MySQL.",
    href: "https://github.com/ChaimaZahani/JEE_Restaurant",
    logo: "/assets/logo.png",
    logoStyle: {
      backgroundColor: "#F0F0F0",
      border: "0.2px solid #CCCCCC",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.1)",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      { id: 1, name: "JEE", path: "/assets/jee-2.svg" },
      { id: 2, name: "MySQL", path: "/assets/mysql-logo-svgrepo-com.svg" },
      { id: 3, name: "HTML", path: "/assets/HTML5.svg" },
      { id: 4, name: "CSS", path: "/assets/CSS3.svg" },
    ],
  },
  {
    title: "Système de Détection d’Animaux",
    desc: "Développement d’un système de détection d’animaux en utilisant une base de données étiquetée.",
    subdesc: "Utilized Python and Machine learning techniques.",
    href: "https://colab.research.google.com/drive/1KKUMMjQzycTbl-HxFCqx4OGnY8P7A10l?usp=sharing",
    logo: "/assets/machine.svg",
    logoStyle: {
      backgroundColor: "#F0F0F0",
      border: "0.2px solid #CCCCCC",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.1)",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Machine Learning",
        path: "/assets/machine_learning.svg",
      },
      { id: 2, name: "Python", path: "/assets/python.svg" },
      { id: 3, name: "Tensorflow", path: "/assets/tensorflow.svg" },
    ],
  },
  {
    title: "Système de Surveillance Sémantique Intelligent",
    desc: "Développement d'une plateforme basée sur la blockchain pour le traitement des données maritimes en temps réel.",
    subdesc: "Utilized Truffle, Solidity, MERN, Python, React.js, Node.js.",
    href: "https://gitlab.com/chaimaZH/projet-blockchain",
    logo: "/assets/boat.png",
    logoStyle: {
      backgroundColor: "#F0F0F0",
      border: "0.2px solid #CCCCCC",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.1)",
    },
    spotlight: "/assets/spotlight9.png",
    tags: [
      { id: 1, name: "Blockchain", path: "/assets/blockchain.svg" },
      { id: 2, name: "MERN", path: "/assets/mern_logo.svg" },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Devsty-it",
    pos: "Lead Developer Intern",
    duration: "February 2024 - July 2024",
    title:
      "Developed, integrated, and continuously deployed a real-time people-counting application for the retail sector, improving operational efficiency through precise detection, tracking, and counting. Designed and deployed an intuitive dashboard for real-time data visualization, and implemented a robust backend for data management and API communication. Deployed the application using containerization, managing scalability through automated deployment pipelines.",
    icon: "/assets/devsty.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Pithos Global Technology OWS",
    pos: "Web Development Intern",
    duration: "June 2023 - August 2023",
    title:
      "Developed distinct elements of the official website, including APIs for internal user and visitor management. Created frontend components according to specified requirements.",
    icon: "/assets/PGT.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "ENIS",
    pos: "Lead Developer",
    duration: "February 2023 - June 2023",
    title:
      "Developed a blockchain-based platform for real-time maritime data processing, improving security and environmental awareness through data integration.",
    icon: "/assets/enis-logo.jpg",
    animation: "salute",
  },
];
