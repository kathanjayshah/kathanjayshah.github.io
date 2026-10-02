import groundControl from "../../Assets/logos/ground-control.svg";
import opasMobile from "../../Assets/logos/opas-mobile.png";

export const jobs = [
  {
    company: "Ground Control",
    role: "Software Developer",
    src: groundControl,
    duration: "Oct 2025 - Present",
    place: "St. John's, NL",
    description: [
      "Working at a YC-backed startup building software for contract manufacturers in the aerospace and defense supply chain. Contributing across the full stack using Next.js, Python, and Go to develop tools that streamline First Article Inspection (FAI) generation and ensure AS9102 compliance. I own features end-to-end, working directly with end-users to understand their needs and ship production-ready solutions. I collaborate closely with the founding team to progress the product roadmap, triage issues, and deliver solutions that balance user experience with engineering constraints.",
    ],
  },
  {
    company: "PAL Aerospace",
    role: "Intermediate Software Developer",
    src: "https://palaerospace.com/wp-content/uploads/2024/04/Favicon.png",
    duration: "Jul 2025 - Oct 2025",
    place: "St. John's, NL",
    description: [
      "Created full-stack applications using Angular and Node.js within a monorepo architecture, backed by Microsoft SQL Server and Sequelize ORM. I design and implement RESTful APIs with clear separation of concerns across controllers, services, and repositories, applying Domain-Driven Design (DDD) principles to align technical solutions with business domains. I used software design patterns to build scalable, maintainable, and reusable code, contributing to improved system reliability, faster feature delivery, and a better overall user experience.",
    ],
  },

  {
    company: "Focus FS",
    role: "Intermediate Full Stack Software Developer",
    src: "https://res.cloudinary.com/micronetonline/image/upload/c_crop,h_400,w_400,x_0,y_0/v1651855092/tenants/cb9e9e01-1ce4-4bf7-b530-3807d3c7c9b0/b38f24a94c4e40b59410ffa6fc3bd0fe/Focus-FS-Logo.png",
    duration: "Apr 2025 - Jul 2025",
    place: "St. John's, NL",
    description: [
      "Developed and maintained dynamic front-end features using Angular, improving user interface responsiveness and overall application usability. Built and integrated RESTful APIs with a MySQL backend to enable efficient data transactions, enhancing system reliability and performance.",
    ],
  },
  {
    company: "OPAS Mobile",
    role: "Full Stack Software Developer",
    src: opasMobile,
    duration: "Feb 2023 - Apr 2025",
    place: "St. John's, NL",
    description: [
      "Architected and delivered full-stack features using ReactJS, Node.js, GraphQL, and PostgreSQL, enhancing system scalability and cutting data retrieval time by 40%. Led the transformation of the company’s safety SaaS application into a Progressive Web App (PWA), with offline capabilities and service worker integration. Developed GraphQL APIs with PostgreSQL, optimized for performance and seamless front-end integration using ReactJS and Apollo Client. Implemented CI/CD pipelines with GitHub Actions, improving deployment efficiency. Designed offline request handling to ensure data consistency during network failures, utilizing IndexedDB for data integrity. Integrated AI functionalities via external APIs and configured Product Fruits for interactive user onboarding.",
    ],
  },
  {
    company: "Celtx / Backlight",
    role: "Software Developer (CO-OP)",
    duration: "Jan 2021 - Sep 2022",
    place: "St. John's, NL",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hi_Res_white_on_black_celtx_logo.jpg",
    description: [
      "As a full-stack developer, I implemented New User Authentication and designed intuitive landing and onboarding pages. I integrated Google and Microsoft account sign-ups and contributed to the design and technical decisions for a SaaS cloud-based product. Following Agile methodology with JIRA, I enhanced offline functionality for Chromium-based browsers, improved code reusability, and migrated legacy Google Closure code to ReactJS. Additionally, I executed unit tests to ensure high code quality, utilized React Router for client-side routing, and Axios for async HTTP requests.",
    ],
  },
  {
    company: "Let's Talk Science",
    role: "Special Events Co-ordinator",
    duration: "Oct 2022 - Dec 2022",
    src: "https://womeninengtech.ca/wp-content/uploads/2020/05/letstalkscience.jpg",
    place: "St. John's, NL",
    description: [
      "Coordinated membership events, including banquets, concerts, and conferences, while providing administrative support to Development Directors. Created and maintained a Slack network for internal team communication and produced data science visualizations using Python libraries like Pandas and Seaborn.",
    ],
  },
  {
    company: "Canary Cycles",
    role: "Web Administrator",
    duration: "Apr 2019 - Sep 2020",
    place: "St. John's, NL",
    src: require("./images.jpeg"),
    description: [
      "Gained experience in basic HTML and JavaScript by creating an organized website. Developed communication skills by advising and interacting with customers, and improved management skills through arranging, decorating, and restocking the shop.",
    ],
  },
  {
    company: "School Of Graduate Studies",
    role: "Recruitment & Retention Assistant",
    duration: "Jan 2020 - Apr 2020",
    place: "St. John's, NL",
    src: require("./MUN-logo-800x492.png"),
    description: [
      "Expanded on-field knowledge in retention and recruitment by working with potential graduate students worldwide. Successfully gathered raw data and transformed it into valuable articles and data frames for future data science projects at the School of Graduate Studies.",
    ],
  },
];

export const schools = [
  {
    company: "Memorial University Of Newfoundland",
    role: "Bachelor Of Science",
    description: ["Computer Science & Mathematics", "\r", "St. John's, NL"],
    duration: "2019 - 2023",
    src: require("./MUN-logo-800x492.png"),
  },
];
