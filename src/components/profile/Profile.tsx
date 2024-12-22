import profile from "../../imgs/Shane_Kearney.jpg";
import { SectionProps } from "../../types/types";
import { Section } from "../styled/Styles";
import { ProfileContainer } from "./Profile.style";

const Profile = (props: SectionProps) => {
  return (
    <Section>
      <ProfileContainer>
        <img src={profile} alt="Shane Kearney" />
        <h1>{props.profile?.title.toUpperCase()}</h1>
        <p>({props.profile?.handle.toLowerCase()})</p>
      </ProfileContainer>
    </Section>
  );
};

export default Profile;
