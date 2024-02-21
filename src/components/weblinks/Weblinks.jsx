import { List } from "./Weblinks.style";
import { Title, Section } from "../styled/Styles";

const Weblinks = (props) => {
  return (
    <Section>
      <Title>{props.section.title}</Title>

      <List>
        {props.section.content.map((webLink) => {
          return (
            <li key={webLink.id}>
              <webLink.Icon color="#1BDFB0" size={24} />
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
