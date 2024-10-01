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
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Pithos Global Technology OWS - Test Infrastructure Configuration",
    desc: "Configured a test infrastructure using Ansible to automate the deployment of Helm, kubectl, and Docker on a Terraform instance.",
    subdesc:
      "Utilized Terraform and Ansible for efficient automation and deployment processes.",
    href: "#", // Add link if available
    texture: "/textures/project/project1.mp4", // Adjust if necessary
    logo: "/assets/project-logo1.png", // Adjust if necessary
    logoStyle: {
      backgroundColor: "#E0E0E0", // Customize style
      border: "0.2px solid #CCCCCC",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.1)",
    },
    spotlight: "/assets/spotlight1.png", // Adjust if necessary
    tags: [
      { id: 1, name: "Terraform", path: "/assets/terraform.svg" },
      { id: 2, name: "Ansible", path: "/assets/ansible.svg" },
    ],
  },
  {
    title:
      "Pithos Global Technology OWS - Deployment Automation with GitLab CI",
    desc: "Automated the deployment of a microservices application through a GitLab CI pipeline.",
    subdesc:
      "Leveraged Helm, Helmfile, GitLab CI, Kubernetes, and Docker Hub for seamless deployment.",
    href: "#", // Add link if available
    texture: "/textures/project/project2.mp4", // Adjust if necessary
    logo: "/assets/project-logo2.png", // Adjust if necessary
    logoStyle: {
      backgroundColor: "#F5F5F5", // Customize style
      border: "0.2px solid #CCCCCC",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.1)",
    },
    spotlight: "/assets/spotlight2.png", // Adjust if necessary
    tags: [
      { id: 1, name: "GitLab CI", path: "/assets/gitlab-ci.svg" },
      { id: 2, name: "Kubernetes", path: "/assets/kubernetes.svg" },
    ],
  },
  {
    title: "Vita",
    desc: "Création d’un site web dynamique représentant un blog sur le style de vie.",
    subdesc: "Utilized PHP, jQuery, HTML, CSS, JavaScript, and MySQL.",
    href: "#", // Add link if available
    texture: "/textures/project/project3.mp4", // Adjust if necessary
    logo: "/assets/project-logo3.png", // Adjust if necessary
    logoStyle: {
      backgroundColor: "#F0F0F0", // Customize style
      border: "0.2px solid #CCCCCC",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.1)",
    },
    spotlight: "/assets/spotlight3.png", // Adjust if necessary
    tags: [
      { id: 1, name: "PHP", path: "/assets/php.svg" },
      { id: 2, name: "MySQL", path: "/assets/mysql.svg" },
    ],
  },
  {
    title: "Yamifood Restaurant",
    desc: "Développement d’un site web pour la gestion des réservations dans un restaurant.",
    subdesc: "Utilized HTML, CSS, JEE, and MySQL.",
    href: "#", // Add link if available
    texture: "/textures/project/project4.mp4", // Adjust if necessary
    logo: "/assets/project-logo4.png", // Adjust if necessary
    logoStyle: {
      backgroundColor: "#F0F0F0", // Customize style
      border: "0.2px solid #CCCCCC",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.1)",
    },
    spotlight: "/assets/spotlight4.png", // Adjust if necessary
    tags: [
      { id: 1, name: "JEE", path: "/assets/jee.svg" },
      { id: 2, name: "MySQL", path: "/assets/mysql.svg" },
    ],
  },
  {
    title: "Système de Détection d’Animaux",
    desc: "Développement d’un système de détection d’animaux en utilisant une base de données étiquetée.",
    subdesc: "#", // Add more details if available
    href: "#", // Add link if available
    texture: "/textures/project/project5.mp4", // Adjust if necessary
    logo: "/assets/project-logo5.png", // Adjust if necessary
    logoStyle: {
      backgroundColor: "#F0F0F0", // Customize style
      border: "0.2px solid #CCCCCC",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.1)",
    },
    spotlight: "/assets/spotlight5.png", // Adjust if necessary
    tags: [
      { id: 1, name: "Machine Learning", path: "/assets/machine-learning.svg" },
      { id: 2, name: "Python", path: "/assets/python.svg" },
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
