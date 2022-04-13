import styled from 'styled-components';
import {Title} from '../styled/Styles';

const Table = styled.table`

    td {
        padding-bottom: 1rem;
        vertical-align: top;
    }

    td:first-child {
        font-weight: 600;
        padding-right: 2rem;  
        color: ${props => props.theme.colors.primary};
    }
`

const Bio = props => {

    console.log(props);

    return (
        <section>
            <Title>{props.section.title}</Title>
            
            <Table>
                <tbody>
                    {props.section.content.map(tr => {
                        return (
                            <tr key={tr.id}>
                                <td>{tr.date}</td>
                                <td>{tr.context}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </Table>            
        </section>
    )
}

export default Bio;
