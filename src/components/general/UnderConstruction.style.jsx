import styled from "styled-components";

const dashLength = "50px";
const dashWidth = "2px";

export const UnderConstructionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  padding: 4rem;

  background-image: linear-gradient(90deg, #1BDFB0 50%, transparent 50%), linear-gradient(90deg, #1BDFB0 50%, transparent 50%), linear-gradient(0deg, #1BDFB0 50%, transparent 50%), linear-gradient(0deg, #1BDFB0 50%, transparent 50%);
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: ${dashLength} ${dashWidth}, ${dashLength} ${dashWidth}, ${dashWidth} ${dashLength}, ${dashWidth} ${dashLength};
  background-position: left top, right bottom, left bottom, right top;
  animation: border-dance 4s infinite linear;
  }
  @keyframes border-dance {
    0% {
      background-position: left top, right bottom, left bottom, right top;
    }
    100% {
      background-position: left ${dashLength} top, right ${dashLength} bottom, left bottom ${dashLength}, right top ${dashLength};
    }
  }

  h1 {
    color: #1bdfb0;
    font-weight: 400;
  }


`;
