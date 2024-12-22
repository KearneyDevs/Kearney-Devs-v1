import { IconType } from "react-icons";

export type ComponentName =
  | "header"
  | "profile"
  | "about"
  | "bio"
  | "work"
  | "interests"
  | "weblinks";

export type SectionProps = {
  id: number;
  component: ComponentName;
  title?: string;
  profile?: {
    id: number;
    title: string;
    handle: string;
  }; // profile is optional
  content?: {
    id: number;
    title?: string;
    topic?: string;
    value?: string;
    date?: string;
    context?: string;
    link?: string;
    Icon?: IconType;
    linkOne?: {
      text: string;
      link: string;
    };
    linkTwo?: {
      text: string;
      link: string;
    };
  }[];
};
