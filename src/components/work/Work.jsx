import { Title, Section } from "../styled/Styles";
import UnderConstruction from "../general/UnderConstruction";
const Work = (props) => {
  return (
    <Section>
      <Title>{props.section.title}</Title>
      <UnderConstruction title="Under Construction" />
      {/* {props.section.content.map(p => {
                return (
                    <p key={p.id}>{p.paragraph}</p>
                )
            })} */}
    </Section>
  );
};

export default Work;
