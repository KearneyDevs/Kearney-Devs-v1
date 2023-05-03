import { Title, Section } from "../styled/Styles";
import { Table } from "./Bio.style";

const Bio = (props) => {
  return (
    <Section>
      <Title>{props.section.title}</Title>

      <Table>
        <tbody>
          {props.section.content.map((tr) => {
            return (
              <tr key={tr.id}>
                <td>{tr.date}</td>
                <td>{tr.context}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Section>
  );
};

export default Bio;
