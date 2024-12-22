import { AiFillGithub } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SectionProps } from "./types/types";

export const sections: SectionProps[] = [
  {
    id: 1,
    component: "header",
    title: "",
  },
  {
    id: 2,
    component: "profile",
    profile: {
      id: 21,
      title: "Shane Kearney",
      handle: "KearneyDevs",
    },
  },
  {
    id: 3,
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
        value: `${new Date().getFullYear() - 2017} Years`,
      },
    ],
  },
  {
    id: 4,
    component: "work",
    title: "Work",
  },
  {
    id: 5,
    component: "bio",
    title: "The Adventure so far",
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
    component: "interests",
    title: "Interests",
  },
  {
    id: 7,
    component: "weblinks",
    title: "Web Links",
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
        Icon: RiTwitterXFill,
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
