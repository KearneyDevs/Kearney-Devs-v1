import styled from 'styled-components';


const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    background: rgba(84, 255, 234, 0.54);;
    padding: 1rem 0;
`

const Footer = props => {

    return (
        <FooterContainer>
            <p>&copy;{new Date().getFullYear()} Shane Kearney.  All Rights Reserved.</p>
        </FooterContainer>
    )
}

export default Footer;
