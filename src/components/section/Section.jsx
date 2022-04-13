import styled from "styled-components"

const Container = styled.section`
    padding: 1rem;
`

const Section = ({title, children}) => {
    return (
        <Container>
            <h3>{title}</h3>
            {children}
        </Container>
    )
}

export default Section
