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
  },
  {
    id: 3,
    title: "",
    component: "about",
    content: [
      {
        id: 32,
        topic: "Profession",
        value: "Front-End Developer",
      },
      {
        id: 33,
        topic: "Framework",
        value: "ReactJS",
      },
      {
        id: 34,
        topic: "Design",
        value: "Figma",
      },
      {
        id: 35,
        topic: "Experience",
        value: "5 Years",
      },
    ],
  },
  {
    id: 4,
    title: "Work",
    component: "work",
    content: [
      {
        id: 41,
        paragraph:
          "I am a self-taught front-end developer, from the county of Ard Mhacha (Armagh), living in Scotlands capital, Edinburgh.",
      },
      {
        id: 42,
        paragraph:
          "I have a passion for design and development, to utilise my craft and create value where digitally required. When I am not coding, you will find me immersed in either video games or gaelic football.",
      },
    ],
  },
  {
    id: 5,
    title: "The Adventure so far",
    component: "bio",
    content: [
      {
        id: 51,
        date: "1991",
        context: "Ready player one...",
      },
      {
        id: 52,
        date: "2009",
        context: "Completed BTEC National Diploma in Computer Games Design",
      },
      {
        id: 53,
        date: "2015",
        context:
          "Game Design & Production Management with Honours achieved from the",
        linkOne: {
          text: "University of Abertay",
          link: "https://www.abertay.ac.uk/",
        },
        linkTwo: {
          text: "Dundee",
          link: "https://www.google.com/maps/place/dundee/data=!4m2!3m1!1s0x48864144ab639cd3:0x94e43b1e384be52a?sa=X&ved=2ahUKEwiX7p6dhNr-AhUtQkEAHbPlB8kQ8gF6BAhwEAI",
        },
      },
      {
        id: 54,
        date: "2017",
        context:
          "Worked as a SharePoint Developer at the Tesco Customer Engagement Centre, Dundee.",
      },
      {
        id: 55,
        date: "2022",
        context: "Left Tesco and now focusing on personal development.",
      },
    ],
  },
  {
    id: 6,
    title: "Interests",
    component: "interests",
  },
  {
    id: 7,
    title: "Web Links",
    component: "weblinks",
    content: [
      {
        id: 71,
        title: "@KearneyDevs",
        link: "https://github.com/KearneyDevs",
        Icon: AiFillGithub,
      },
      {
        id: 72,
        title: "@Kearney_Devs",
        link: "https://twitter.com/Kearney_Devs",
        Icon: AiOutlineTwitter,
      },
      {
        id: 73,
        title: "@kearneydevs",
        link: "https://www.instagram.com/kearneydevs/",
        Icon: AiOutlineInstagram,
      },
      {
        id: 74,
        title: "@shane-kearney",
        link: "https://www.linkedin.com/in/shane-kearney-bb347765/",
        Icon: AiFillLinkedin,
      },
    ],
  },
];
