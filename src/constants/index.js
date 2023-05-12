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
  pwc,
  gramiksha,
  philips,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  aws,
  python,
  matlab,
  sql,
  tableau,
  iotiot,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Cloud Associate",
    icon: web,
  },
  {
    title: "BlockChain and Quantum Computing Ethusiast",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Matlab",
    icon: matlab,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Aws",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "tableau",
    icon: tableau,
  },
];

const experiences = [
  {
    title: "Associate 2",
    company_name: "PriceWaterhouseCoopers",
    icon: pwc,
    iconBg: "#383E56",
    date: "Jan 2021 - Jul 2022",
    points: [
      "Performed Data Cleanup and Transformation of data using Tools like Alteryx and Python through automation which streamlined the process by 45%.",
      "Developed Pipelines for forecasting and monitoring by implementing ML models on AWS resulting in better decision making, enhanced training efficiency by 10 % and reduction of 20% in cost.",
      "Promoted within 12 months due to strong performance and organizational impact.",
      "Facilitated Workshops on ETL concepts for over 50+ peers.",
    ],
  },
  {
    title: "Intern",
    company_name: "Philips",
    icon: philips,
    iconBg: "#383E56",
    date: "May 2020 - Dec 2020",
    points: [
      "Developed algorithm to segment plasma cancer cells,namely myeloma, by implementing various Unet models and transfer learning techniques.The model was trained on small dataset and for different scenarios of plasma cells. The model developed was 5% efficient and produced an accuracy of 87%.",
      "Worked on Monai Framework to develop a Unet model to segment a liver from CT or MRI scans. Performed visualization and annotation using tools like 3D slicer and ITK snap.",
    ],
  },
  {
    title: "React Developer | Team Lead",
    company_name: "Gramiksha",
    icon: gramiksha,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - Jan 2020",
    points: [
      "Led multi-disciplinary 5 person team to design, develop, and launch online website; prioritized and resolved 45+ new features and bug fixes.",
      "Improved outreach of the company which accelerated revenue growth by 25% and redesigned admin processes.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "IoTIoT",
    icon: iotiot,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Jun 2019",
    points: [
      "Developed a responsive and user-friendly website using React JS and Node JS and hosted Machine learning models which was deployed on an edge computing device, reducing latency and increased performance, resulting in 20% decrease in response time.",
      "Collaborated with cross-functional teams to ensure the smooth functioning of the website and resolve any issues that arose, resulting in zero downtime during my tenure.",
    ],
  },

  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
