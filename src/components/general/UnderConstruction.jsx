import { UnderConstructionContainer } from "./UnderConstruction.style";

const UnderConstruction = ({ title }) => {
  return (
    <UnderConstructionContainer>
      <h1>{title.toUpperCase()}</h1>
    </UnderConstructionContainer>
  );
};

export default UnderConstruction;
