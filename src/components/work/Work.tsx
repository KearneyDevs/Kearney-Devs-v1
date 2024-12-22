import { Title, Section } from "../styled/Styles";
import UnderConstruction from "../general/UnderConstruction";
import { SectionProps } from "../../types/types";
const Work = (props: SectionProps) => {
  return (
    <Section>
      <Title>{props.title}</Title>
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
