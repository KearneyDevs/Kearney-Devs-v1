import React from "react";
import { Section, Content } from "../styled/Styles";
import { Table } from "./About.style";

const About = (props) => {
  return (
    <Section>
      <Table>
        <tbody>
          {props.section.content.map((tr) => {
            return (
              <tr key={tr.id}>
                <td>{tr.topic}</td>
                <td>{tr.value}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Content>
        <p>
          I am a self-taught front-end developer, from the county of{" "}
          <a
            href="https://www.google.com/maps/place/Armagh/@54.34702,-6.6485549,13z/data=!3m1!4b1!4m6!3m5!1s0x48608d557dcb168d:0xb92e637dcdc91848!8m2!3d54.3502798!4d-6.652792!16zL20vMDJkdHFz"
            target="_blank"
            rel="noreferrer"
          >
            Ard Mhacha
          </a>
          ,{" "}
          <a
            href="https://www.google.com/maps/place/Ireland/@53.3053169,-13.2322336,6z/data=!3m1!4b1!4m6!3m5!1s0x485e619e5d73698f:0xca9b39444d6ac68d!8m2!3d53.7797554!4d-7.3055309!16zL20vMDEyd2di"
            target="_blank"
            rel="noreferrer"
          >
            Éire
          </a>
          , now living in Scotland's capital,{" "}
          <a
            href="https://www.google.com/maps/place/Edinburgh/@55.941153,-3.5349628,10z/data=!3m1!4b1!4m6!3m5!1s0x4887b800a5982623:0x64f2147b7ce71727!8m2!3d55.953252!4d-3.188267!16zL20vMDJtNzc"
            target="_blank"
            rel="noreferrer"
          >
            Edinburgh
          </a>
          .
        </p>
        <p>
          I have a passion for design and development, to utilise my craft and
          create value where digitally required. I take a mobile-first approach
          and have a keen interest in the Psychology of Interaction Design.
        </p>
      </Content>
    </Section>
  );
};

export default About;
