import styled from "styled-components";

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
