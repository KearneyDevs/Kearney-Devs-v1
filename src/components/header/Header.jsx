import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../../imgs/Icon2.svg'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    align-items: center;
`

const Header = props => {

    console.log(props);
    
    return (
        <Nav>
            <a href="">
                <img src={logo} width="57px" height="18px" alt="Shane Kearney" />
            </a>

            <AiOutlineMenu size={32} color="#1BDFB0" />
        </Nav>
    )
}

export default Header;
