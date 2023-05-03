import { Title, Section } from "../styled/Styles";

const Interests = (props) => {
  return (
    <Section>
      <Title>{props.section.title}</Title>

      {props.section.content.map((p) => {
        return <p key={p.id}>{p.paragraph}</p>;
      })}
    </Section>
  );
};

export default Interests;
