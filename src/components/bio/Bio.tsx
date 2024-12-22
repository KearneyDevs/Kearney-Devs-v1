import { Title, Section, Content } from "../styled/Styles";
import { Table } from "./Bio.style";
import { SectionProps } from "../../types/types";

const Bio = (props: SectionProps) => {
  return (
    <Section>
      <Title>{props.title}</Title>

      <Content>
        <Table>
          <tbody>
            <tr>
              <td>1991</td>
              <td>Ready player one...</td>
            </tr>
            <tr>
              <td>2009</td>
              <td>
                Completed BTEC National Diploma in Computer Games Design at the{" "}
                <a
                  href="https://www.src.ac.uk/about-us/campuses/armagh-campus"
                  target="_blank"
                  rel="noreferrer"
                >
                  Southern Regional College, &#40;Armagh Campus&#41;
                </a>
              </td>
            </tr>
            <tr>
              <td>2009</td>
              <td>
                Game Design & Production Management with Honours achieved from
                the{" "}
                <a
                  href="https://www.abertay.ac.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  University of Abertay
                </a>
                ,{" "}
                <a
                  href="https://www.google.com/maps/place/dundee/data=!4m2!3m1!1s0x48864144ab639cd3:0x94e43b1e384be52a?sa=X&ved=2ahUKEwiT86aX0ub-AhUKUcAKHY2aDNkQ8gF6BAhnEAI"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dundee
                </a>
                .
              </td>
            </tr>
            <tr>
              <td>2017</td>
              <td>
                Front-End Developer utilising SharePoint online, and creating
                applications using AngularJS and ReactJS at the Tesco Customer
                Engagement Centre in Dundee.
              </td>
            </tr>
            <tr>
              <td>2022</td>
              <td>
                As a Front-End Developer I worked as part of a small team that
                utilised AWS to deliver severless functionality at{" "}
                <a
                  href="https://www.exceptionuk.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Exception
                </a>
                .
              </td>
            </tr>
            <tr>
              <td>2024</td>
              <td>
                Currently looking for a new position, using my spare time to
                enhance my skills.
              </td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Section>
  );
};

export default Bio;
