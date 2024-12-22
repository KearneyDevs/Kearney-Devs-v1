import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: ${(props) => `3px solid ${props.theme.colors.primary}`};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    filter: drop-shadow(0px 8px 5px rgba(0, 0, 0, 0.25));
  }

  h1 {
    margin: 1rem 0 0 0;
  }

  p {
    margin: 0;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
