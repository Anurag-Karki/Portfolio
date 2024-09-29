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
  kodiary,
  github,
  figma,
  docker,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  blender,
  cybsen,
  photoshop,
  SOS,
  epa,
  drive,
  vit,
  deakin,
  redcross,
  naso,
  lions,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "qualification",
    title: "Qualification",
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
    title: "Blender Artist",
    icon: mobile,
  },
  {
    title: "Graphics Designer",
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
    title: "React.js Internship",
    company_name: "Kodiary Technologies",
    icon: kodiary,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and project members",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Creating a workspace for collaboration",
    ],
  },
  {
    title: "Research Internship",
    company_name: "Deakin University, Waurn Ponds Campus, Geelong, Australia",
    icon: deakin,
    iconBg: "#383E56",
    date: "Jan 2024 - Aug 2024",
    points: [
      "Developing sophisticated models that can efficiently address both spatial and temporal anomalies in sensor data in an efficient manner. ",
      "Collaborating with senior faculty and experiencing the diversity of Semester Abroad Programme",
      "The effectiveness of these models will be demonstrated using real-world datasets, showcasing their improved accuracy in detecting legitimate, faulty and malicious sensor behavior",
      "The project aims to contribute new knowledge to the field of IoT in agriculture, with potential applications extending beyond smart farming to other IoT-driven domains",
    ],
  },
  {
    title: "Project Assistant",
    company_name: "Everest Public Academy",
    icon: epa,
    iconBg: "#E6DEDD",
    date: "July 2019 - June 2020",
    points: [
      "Student Welfare Projects were carried out every month.",
      "International Platform to communicate educational wellbeing",
      "Participated in Internation School Award Project conducted by British Council",
    ],
  },

  {
    title: "Graphics Designing and 3D Modeling",
    company_name: "Self Development",
    icon: photoshop,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developing skills in creatinig visually appealing designs for a range of mediums, inclusing social media graphics, posters and logos.",
      "Acquiring skills like 3D moedling, animation, texturing, lighting, compositing",
      "Working on several projects, both independently and in collaboration with other designers.",
      "Combining blender and three.js to create more interactive web applications",
      "Participating in reviews and constructive feedback from professionals.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Deakin Blue Marble Study Tour 2023",
    name: "Deakin University, Australia",
    designation: "Oct. 2023",
    company: "Nepal's Representative",
    image: deakin,
  },
  {
    testimonial: "COMPEX Scholarship 2020",
    name: "Vellore Institute of Technology",
    designation: "December 2020-2024",
    company: "Full Ride Scholarship by Indian Embassy",
    image: vit,
  },
  {
    testimonial: "Nepal Astronomy Olympiad",
    name: "Nepal Astronomical Society",
    designation: "2019",
    company: "Selected for the International Astronomy Olympiad on Hungary",
    image: naso,
  },
  {
    testimonial: "Junior Youth Red Cross Circle",
    name: "Red Cross Society, Nepal",
    designation: "Rank 1",
    company: "Trainings on First Aid and Earthquake Safety",
    image: redcross,
  },
  {
    testimonial: "Lions Club International",
    name: "Lions Club of Bhaktapur Neelkantheshor",
    designation: "Club Secratory",
    company: "Involved in various major and minor service activities",
    image: lions,
  },
];

const projects = [
  {
    name: "CoAct: Collaborative workspace",
    description:
      "Web-based platform that allows you to have a collaborative work space for a project",
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
        name: "firebase",
        color: "white",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    image2: github,
    source_code_link: "https://github.com/Anurag-Karki",
  },

  {
    name: "Accurate Detection of IOT Sensor Behavior in Malicious Scenario",
    description: "Research Internship at Deakin University, Australaia",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "DL",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "white",
      },
      {
        name: "Keras",
        color: "pink-text-gradient",
      },
    ],
    image: cybsen,
    image2: drive,
    source_code_link:
      "https://drive.google.com/file/d/1eosCi7Hv0uK2eGtXRBqTKRvLKgubDrzw/view?usp=sharing",
  },
  {
    name: "Thamel Bazar: Secondary e-Market",
    description:
      "Web application that enables users to bid on the products available in the store.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "ajax",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    image2: github,
    source_code_link: "https://github.com/Anurag-Karki",
  },
  {
    name: "My designs: 2022-2023",
    description:
      "A collection of my works. It includes blender animation, structural design, vexel art, poster designs",
    tags: [
      {
        name: "Blender",
        color: "blue-text-gradient",
      },
      {
        name: "Photoshop",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    image2: drive,
    source_code_link:
      "https://drive.google.com/drive/folders/11riICEkM9Ado4dp4JrjTG0LKVkyQWMpP?usp=share_link",
  },
];

const qualifications = [
  {
    name: "Bachelor of Science in Computer Science",
    uniname: "Vellore Institute of Technology, Vellore, India",
    cgpa: "3.66",
    numyears: "2020-2024",
    image: vit,
  },
  {
    name: "Higher Secondary School: Science",
    uniname: "SOS Hermann Gmeiner School, Sanothimi, Bhaktapur",
    cgpa: "3.65",
    numyears: "2018-2020",
    image: SOS,
  },
  {
    name: "Secondary Education Examination",
    uniname: "Everest Public Academy, Sintitar, Bhaktapur",
    cgpa: "3.85",
    numyears: "2008-2018",
    image: epa,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  qualifications,
};
