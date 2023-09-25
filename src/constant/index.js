import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  threejs,
} from "../assets/index";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id:"resume",
    title:"Resume"
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Back End Developer and project Manager",
    company_name: "Africa To Silcon Valley",
    icon: "src/assets/company/A2sv.png",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "led a cross-functional team of 20+ developers in the ongoing development of Easy Listing ",
      " E-commerce Platform with Telegram and WhatsApp Integration with Ai ChatBot",
      "Achieved remarkable feedback with a 95%+ user acceptance rate, simplifying lives in Africa, especially for those with technical inefficiency challenges.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Minovation ",
    icon: "src/assets/company/Minovation.png",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      " Implementing  AI solutions for IoT applications.",
      " Utilized open-source technologies, including Kura and Kapua, for IoT development.",
    ,
    ],
  },
  
    
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Start Up projects",
    description:
      "App-based platform that allows  investors  to search for inovative startups  , and the can also requests to investors and posts the startups to attract the investor  .",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
       {
        name: "Nestjs",
        color: "pink-text-gradient",
      },
      
    ],
    image: "src/assets/StartUP.png",
    source_code_link: "https://github.com/iamTadaeltadi/mobile-app-group-project",
  },
  {
    name: "E-commerce app",
    description:
      "Web application that enables users to add the review and add to cart the products , view many products",
    tags: [
      {
        name: "HTMl",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
       {
        name: "Nestjs",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/E-commerce.png",
    source_code_link: "https://github.com/iamTadaeltadi/web-group-assignment",
  },
    
];

export { services, technologies, experiences, testimonials, projects };