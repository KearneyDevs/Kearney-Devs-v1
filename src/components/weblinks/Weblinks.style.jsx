import styled from 'styled-components';

export const List = styled.ul`
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
    font-weight: 500;
    color: ${props => props.theme.colors.defaultText}
}
`