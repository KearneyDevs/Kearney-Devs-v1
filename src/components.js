import React from "react";
import { Section } from "./components/styled/Styles";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Bio from "./components/bio/Bio";
import Interests from "./components/interests/Interests";
import WebLinks from "./components/weblinks/Weblinks";

const Components = {
  header: Header,
  profile: Profile,
  about: About,
  bio: Bio,
  work: Work,
  interests: Interests,
  weblinks: WebLinks,
};

export default function createSections(section) {
  if (typeof Components[section.component] !== "undefined") {
    return React.createElement(Components[section.component], {
      key: section.id,
      section: section,
    });
  }
  return React.createElement(
    () => (
      <Section>
        <p>The component {section.component} has not been created yet.</p>
      </Section>
    ),
    { key: section.id }
  );
}
