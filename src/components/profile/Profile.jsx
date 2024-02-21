import profile from "../../imgs/Shane_Kearney.jpg";
import { Section } from "../styled/Styles";
import { ProfileContainer } from "./Profile.style";

const Profile = (props) => {
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
