import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0 2rem 0;

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

export const Table = styled.table`
  width: 100%;
  max-width: 450px;
  margin-bottom: 2rem;

  tr {
    display: flex;
    justify-content: space-between;
  }

  td {
    vertical-align: top;
    color: ${(props) => props.theme.colors.secondary};
    text-align: right;
    line-height: 1.5rem;
  }

  td:first-child {
    font-weight: 600;
    padding-right: 2rem;
    color: ${(props) => props.theme.colors.primary};
    text-align: left;
  }
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
