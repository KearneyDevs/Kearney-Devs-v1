import { UnderConstructionContainer } from "./UnderConstruction.style";

const UnderConstruction = ({ title }) => {
  return (
    <UnderConstructionContainer>
      <h1>{title.toUpperCase()}</h1>
      <div className="box box-h">Animated</div>
    </UnderConstructionContainer>
  );
};

export default UnderConstruction;
