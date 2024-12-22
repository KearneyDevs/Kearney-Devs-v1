import React from "react";
import { Section } from "./components/styled/Styles";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Bio from "./components/bio/Bio";
import Interests from "./components/interests/Interests";
import WebLinks from "./components/weblinks/Weblinks";
import { ComponentName } from "./types/types";

// Define the mapping of component names to components
const Components: Record<ComponentName, React.ComponentType<any>> = {
  header: Header,
  profile: Profile,
  about: About,
  bio: Bio,
  work: Work,
  interests: Interests,
  weblinks: WebLinks,
};

interface SectionProps {
  id: number;
  component: ComponentName;
}

export default function createSections(section: SectionProps) {
  const Component = Components[section.component];

  if (Component) {
    return <Component key={section.id} section={section} />;
  }

  return (
    <Section key={section.id}>
      <p>The component {section.component} has not been created yet.</p>
    </Section>
  );
}
