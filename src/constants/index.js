import {
  github,
  pathfinder,
  backend,
  web,
  creator,
  mobile,
  autogo,
  soccerMonk,
  suitespot,
  stackOverflow,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  awslogo,
  pythonLogo,
  javalogo
} from "../assets"

const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Student",
      icon: creator,
    },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: javalogo,
  },
  {
    name: "Python",
    icon: pythonLogo,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "AWS",
    icon: awslogo,
  },
];

const projects = [
  {
    name: "GitHub Clone",
    description:
      "Engineered a full-featured GitHub clone using React.js and Node.js, supporting repository management, issue tracking, and real-time collaboration. Deployed on AWS with S3, EC2, and Amplify for scalable performance and 99% uptime. Enhanced backend speed with MongoDB indexing and Redis caching, and ensured reliability through a CI/CD pipeline with GitHub Actions and Jest",
    tags: [
      {
        name: "React.js",
        color: "text-blue-400",
      },
      {
        name: "Node.js",
        color: "text-green-400",
      },
      {
        name: "AWS",
        color: "text-pink-400",
      },
    ],
    image: github,
    source_code_link: "https://github.com/adarsh04449/Github",
  },
  {
    name: "Suite Spot Hotel Management Web-app",
    description:
      "Led a team of 10 developers using Agile Scrum practices to craft a hotel management system featuring a dynamic search engine with filtering for location, price, and amenities. Deployed the app on Microsoft Azure Web Apps for seamless accessibility.",
    tags: [
      {
        name: "React.js",
        color: "text-blue-400",
      },
      {
        name: "MongoDB",
        color: "text-green-400",
      },
      {
        name: "Node.js",
        color: "text-pink-400",
      },
    ],
    image: suitespot,
    source_code_link: "https://github.com/adarsh04449/Suite-Spot",
  },
  {
    name: "Stack Overflow Prototype",
    description:
      "Developed a Stack Overflow simulation supporting upvotes, badges, threaded discussions, and multi-criteria search. Integrated Apache Kafka for real-time update streaming.",
    tags: [
      {
        name: "Node.js",
        color: "text-blue-400",
      },
      {
        name: "Express",
        color: "text-green-400",
      },
      {
        name: "React.js",
        color: "text-pink-400",
      },
    ],
    image: stackOverflow,
    source_code_link: "https://github.com/adarsh04449/Stack-overflow-simulation-Project",
  },
  {
    name: "AutoGo Car Rental Web-app",
    description:
      "Developed a car rental website featuring reservations, maps, loyalty system, invoicing, and dynamic filtering. Focused on user experience and scalable backend.",
    tags: [
      {
        name: "MySQL",
        color: "text-blue-400",
      },
      {
        name: "PHP",
        color: "text-green-400",
      },
      {
        name: "CSS",
        color: "text-pink-400",
      },
    ],
    image: autogo,
    source_code_link: "https://github.com/adarsh04449/Auto-Go-Project",
  },
  {
    name: "Path Finding Visualizer",
    description:
      "Visualized pathfinding with Dijkstra's and maze generation via Kruskal's algorithm on a 50x50 grid. Built using Python's Pygame and custom data structures.",
    tags: [
      {
        name: "Pygame",
        color: "text-blue-400",
      },
      {
        name: "Python",
        color: "text-green-400",
      },
      {
        name: "TKinter",
        color: "text-pink-400",
      },
    ],
    image: pathfinder,
    source_code_link: "https://github.com/adarsh04449/Path-Finding-Game",
  },
  {
    name: "Soccer Monk",
    description:
      "Built a visual analytics tool for soccer player statistics, enabling interactive heatmap insights, player filtering, and positional analysis using pandas and seaborn.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "Seaborn",
        color: "text-green-400",
      },
      {
        name: "Pandas",
        color: "text-pink-400",
      },
    ],
    image: soccerMonk,
    source_code_link: "https://github.com/adarsh04449/Soccer-Monk",
  },
];


export { services, projects, technologies };