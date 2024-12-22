import styled from 'styled-components';


export const Table = styled.table`

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