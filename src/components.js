import React from "react";
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
  work: Work,
  bio: Bio,
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
      <div>The component {section.component} has not been created yet.</div>
    ),
    { key: section.id }
  );
}
