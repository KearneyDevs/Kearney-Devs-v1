import { UnderConstructionContainer } from "./UnderConstruction.style";

const UnderConstruction = ({ title }: { title: string }) => {
  return (
    <UnderConstructionContainer>
      <h1>{title.toUpperCase()}</h1>
    </UnderConstructionContainer>
  );
};

export default UnderConstruction;
