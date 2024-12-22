import { SectionProps } from "../../types/types";
import { Title, Section, Content } from "../styled/Styles";

const Interests = (props: SectionProps) => {
  return (
    <Section>
      <Title>{props.title}</Title>

      <Content>
        <p>
          When I am not coding, you will find me immersed in video games,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Gaelic_football"
            target="_blank"
            rel="noreferrer"
          >
            Gaelic Football
          </a>
          , drawing, looking over{" "}
          <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
            Dribbble
          </a>
          ,{" "}
          <a href="https://www.awwwards.com/" target="_blank" rel="noreferrer">
            Awwwards
          </a>{" "}
          and Pixel Art.
        </p>
      </Content>
    </Section>
  );
};

export default Interests;
