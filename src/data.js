import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export const sections = [
  {
    id: 1,
    title: "",
    component: "header",
  },
  {
    id: 2,
    title: "",
    component: "profile",
    profile: {
      id: 21,
      title: "Shane Kearney",
      handle: "KearneyDevs",
    },
    content: [
      {
        id: 22,
        topic: "Profession",
        value: "Front-End Developer",
      },
      {
        id: 23,
        topic: "Framework",
        value: "ReactJS",
      },
      {
        id: 24,
        topic: "Design",
        value: "Figma",
      },
      {
        id: 25,
        topic: "Experience",
        value: "5 Years",
      },
    ],
    description: [
      {
        id: 26,
        paragraph:
          "I am a self-taught front-end developer, from the county of Ard Mhacha, Éire, now living in Scotland's capital, Edinburgh. I have a passion for design and development, to utilise my craft and create value where digitally required.  I take a mobile-first approach and have a keen interest in the Psychology of Interaction Design.",
      },
    ],
  },
  {
    id: 3,
    title: "Work",
    component: "work",
    content: [
      {
        id: 31,
        paragraph:
          "I am a self-taught front-end developer, from the county of Ard Mhacha (Armagh), living in Scotlands capital, Edinburgh.",
      },
      {
        id: 32,
        paragraph:
          "I have a passion for design and development, to utilise my craft and create value where digitally required. When I am not coding, you will find me immersed in either video games or gaelic football.",
      },
    ],
  },
  {
    id: 4,
    title: "The Adventure so far",
    component: "bio",
    content: [
      {
        id: 41,
        date: "1991",
        context: "Ready player one...",
      },
      {
        id: 42,
        date: "2009",
        context: "Completed BTEC National Diploma in Computer Games Design",
      },
      {
        id: 43,
        date: "2015",
        context:
          "Game Design & Production Management with Honours achieved from the University of Abertay, Dundee.",
      },
      {
        id: 44,
        date: "2017",
        context:
          "Worked as a SharePoint Developer at the Tesco Customer Engagement Centre, Dundee.",
      },
      {
        id: 45,
        date: "2022",
        context: "Left Tesco and now focusing on personal development.",
      },
    ],
  },
  {
    id: 5,
    title: "Interests",
    component: "interests",
    content: [
      {
        id: 51,
        paragraph:
          "When I am not coding, you will find me immersed in video games, gaelic football, drawing, looking over Dribbble, Awwwards and Pixel Art.",
      },
    ],
  },
  {
    id: 6,
    title: "Web Links",
    component: "weblinks",
    content: [
      {
        id: 61,
        title: "@KearneyDevs",
        link: "https://github.com/KearneyDevs",
        Icon: AiFillGithub,
      },
      {
        id: 62,
        title: "@Kearney_Devs",
        link: "https://twitter.com/Kearney_Devs",
        Icon: AiOutlineTwitter,
      },
      {
        id: 63,
        title: "@kearneydevs",
        link: "https://www.instagram.com/kearneydevs/",
        Icon: AiOutlineInstagram,
      },
      {
        id: 64,
        title: "@shane-kearney",
        link: "https://www.linkedin.com/in/shane-kearney-bb347765/",
        Icon: AiFillLinkedin,
      },
    ],
  },
  {
    id: 7,
    title: "",
    component: "footer",
  },
];
