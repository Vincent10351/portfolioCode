import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  java,
  cplusplus,
  sql,
  assembly,
  servicenow,
  webflow,
  ytel,
  expedia,
  webcrawler,
  indexer,
  tesla
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
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
    name: "CSS 3",
    icon: css,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Research IT Intern",
    company_name: "Ytel",
    icon: ytel,
    iconBg: "#383E56",
    date: "June 2021 - Sept 2021",
    points: [
      "Developed software with the use of Apache Beam and Dataflow to stream events from a Kafka Topic, data structures for holding events, into BigQuery, while invalid events are rerouted to a different Kafka Topic to be tested, debugged, and reran. ",
      "Collaborated with multiple software engineers to develop and review code through the implementation of different tools and API’s (Kafka, BigQuery, Apache Beam, Git).",
      "Implemented a service that creates pipelines to split off successful transformations from failed transformations, allowing us to monitor for incorrectly formatted data and reduce failure rate by 10%.",
      "Increased the daily total number of transactions by 10% to approximately 3.5 million transactions.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Expedia",
    icon: expedia,
    iconBg: "#E6DEDD",
    date: "June 2023 - Sept 2023",
    points: [
      "Developed a tool that enables the Help Desk to provide information to their customers (Expedia employees) to improve their call handling times and better enables them to help their customers.",
      "Updated multiple search algorithms to utilize Glide Records and query through ServiceNow tables and retrieve data using Javascript. Reduced search times by up to 1400% and increased accuracy of information.",
      "Contributed to a portal designed for customers to query through ServiceNow tables which utilizes multiple search algorithms as well as fixed formatting issues using HTML.",
      "Created design documents to efficiently plan out what approaches, algorithms, methods, and issues might occur for the intern project.",
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
    name: "Search Engine & Indexer",
    description:
      "Designed a Search Engine that is capable of extracting tokens from up to 55000 documents or Web pages while creating partial indexes for efficient and easy retrieval by the search engine.retrieve the top urls for each query given by accessing partial indexes.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: indexer,
    source_code_link: "https://github.com/Vincent10351/Indexer",
  },
  {
    name: "Web Crawler",
    description:
      "Implemented a Web Crawler that crawls through specific UCI domains in order to determine the most common tokens, subdomains, and pages belonging to UCI while respecting politeness policies and robots.txt files.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: webcrawler,
    source_code_link: "https://github.com/Vincent10351/group-jvac-crawler",
  },
  {
    name: "Tesla Deaths Data Analysis ",
    description:
      "Led a team of 4 and produced data visualization and analysis on Tesla Deaths by solving for the main causation for deaths through the use of linear models, distribution of differences, and  null-hypothesis significance testing.",
    tags: [
      {
        name: "R",
        color: "blue-text-gradient",
      },
    ],
    image: tesla,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };