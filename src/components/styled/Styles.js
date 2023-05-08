import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 850px;
  margin: auto;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.secondary};
  text-decoration: underline;
  text-underline-offset: 0.8rem;
  text-decoration-thickness: 2px;
`;
export const Section = styled.section`
  margin: auto;
  width: 100%;
  max-width: 400px;
`;

export const Content = styled.div`
  a,
  a:visited {
    color: rgb(84, 255, 234);
    opacity: 0.84;
    font-weight: 600;
    text-decoration: none;
  }
`;
