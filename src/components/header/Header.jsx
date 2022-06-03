import { Section } from '../styled/Styles';
import { Nav } from './Header.style';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../../imgs/Icon2.svg'

const Header = props => {

    console.log(props);
    
    return (
        <Section>
            <Nav>
                <a href="#">
                    <img src={logo} width="57px" height="18px" alt="Shane Kearney" />
                </a>

                <a href="#">
                    <AiOutlineMenu size={32} color="#1BDFB0" />
                </a>
                
            </Nav>
        </Section>
    )
}

export default Header;
