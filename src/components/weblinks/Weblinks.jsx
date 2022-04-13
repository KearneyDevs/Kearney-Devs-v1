import styled from 'styled-components';
import {Title} from '../styled/Styles';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const List = styled.ul`
    list-style-type: none;
    margin-left: 1rem;
    padding: 0;

    li {
        display: flex;
        align-items: center;
        margin: 1rem 0;
    }
    
    a {
        margin-left: 1rem; 
        text-decoration: none;
        font-weight: 600;
        color: ${props => props.theme.colors.defaultText}
    }
`

const Weblinks = props => {

    console.log(props);

    return (
        <section>
            <Title>{props.section.title}</Title>
            
            <List>
                <li key={props.section.content[0].id}>
                    <AiFillGithub color="#1BDFB0" size={32} />
                    <a 
                        href={props.section.content[0].link}
                        target="_blank"
                        >
                        {props.section.content[0].title}
                    </a>
                </li>

                <li key={props.section.content[1].id}>
                    <AiOutlineTwitter color="#1BDFB0" size={32} />
                    <a 
                        href={props.section.content[1].link}
                        target="_blank"
                        >
                        {props.section.content[1].title}
                    </a>
                </li>

                <li key={props.section.content[2].id}>
                    <AiOutlineInstagram color="#1BDFB0" size={32} />
                    <a 
                        href={props.section.content[2].link}
                        target="_blank"
                        >
                        {props.section.content[2].title}
                    </a>
                </li>

                <li key={props.section.content[3].id}>
                    <AiFillLinkedin color="#1BDFB0" size={32} />
                    <a 
                        href={props.section.content[3].link}
                        target="_blank"
                        >
                        {props.section.content[3].title}
                    </a>
                </li>
            </List>
           
        </section>
    )
}

export default Weblinks;
