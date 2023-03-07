import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  ruby,
  reactjs,
  tailwind,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  rails,
} from "../assets";

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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Ruby on Rails Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Rails",
    icon: rails,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Ruby on Rails Developer",
    company_name: "Agilez",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Corrected errors in software to fix performance issues and improve usability.",
      "Used coding skills to build prototype sites according to designer vision.",
      "Designed and updated software systems to meet customer needs and exceed expectations.",
      "Developed websites to work properly across Microsoft, Google and Mozilla browsers.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Compliasset",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];



const projects = [
  {
    name: "React Dashboard",
    description:
      "A Dashboard made in React, a lot of functionalities, like a calendar, colorpicker and a lot of charts with a modern UI/UX",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://lr-react-dashboard.netlify.app/",
  },
  {
    name: "Quiz prog",
    description:
      "Web application about a quiz of programming languages, including questions about, Java, C and OOP",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "English Site",
    description:
      "A landing page english site made for a english teatcher, with a section for contact and another 3 sections",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/LucasRochaM/site-de-ingles",
  },
];

export { services, technologies, experiences, projects };
