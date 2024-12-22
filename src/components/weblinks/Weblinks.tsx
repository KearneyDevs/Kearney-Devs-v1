import { List } from "./Weblinks.style";
import { Title, Section } from "../styled/Styles";
import { SectionProps } from "../../types/types";

const Weblinks = (props: SectionProps) => {
  return (
    <Section>
      <Title>{props.title}</Title>

      <List>
        {props.content?.map((webLink) => {
          return (
            <li key={webLink.id}>
              {webLink.Icon && <webLink.Icon color="#1BDFB0" size={24} />}
              <a href={webLink.link} target="_blank" rel="noreferrer">
                {webLink.title}
              </a>
            </li>
          );
        })}
      </List>
    </Section>
  );
};

export default Weblinks;
