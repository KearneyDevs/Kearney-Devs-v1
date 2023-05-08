import { useTheme } from "styled-components";
import profile from "../../imgs/Shane_Kearney.png";
import { Section } from "../styled/Styles";
import { ProfileContainer } from "./Profile.style";

const Profile = (props) => {
  const theme = useTheme();
  console.log(theme.colors);

  return (
    <Section>
      <ProfileContainer>
        <img src={profile} alt="Shane Kearney" />
        <h1>{props.section.profile.title.toUpperCase()}</h1>
        <p>({props.section.profile.handle.toLowerCase()})</p>
      </ProfileContainer>
    </Section>
  );
};

export default Profile;
