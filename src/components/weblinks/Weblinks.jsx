import { List } from './Weblinks.style';
import {Title, Section} from '../styled/Styles';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Weblinks = props => {

    console.log(props);

    return (
        <Section>
            <Title>{props.section.title}</Title>
            
            <List>
                <li key={props.section.content[0].id}>
                    <AiFillGithub color="#1BDFB0" size={24} />
                    <a 
                        href={props.section.content[0].link}
                        target="_blank"
                        rel="noreferrer"
                        >
                        {props.section.content[0].title}
                    </a>
                </li>

                <li key={props.section.content[1].id}>
                    <AiOutlineTwitter color="#1BDFB0" size={24} />
                    <a 
                        href={props.section.content[1].link}
                        target="_blank"
                        rel="noreferrer"
                        >
                        {props.section.content[1].title}
                    </a>
                </li>

                <li key={props.section.content[2].id}>
                    <AiOutlineInstagram color="#1BDFB0" size={24} />
                    <a 
                        href={props.section.content[2].link}
                        target="_blank"
                        rel="noreferrer"
                        >
                        {props.section.content[2].title}
                    </a>
                </li>

                <li key={props.section.content[3].id}>
                    <AiFillLinkedin color="#1BDFB0" size={24} />
                    <a 
                        href={props.section.content[3].link}
                        target="_blank"
                        rel="noreferrer"
                        >
                        {props.section.content[3].title}
                    </a>
                </li>
            </List>
           
        </Section>
    )
}

export default Weblinks;
