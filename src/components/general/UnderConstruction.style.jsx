import styled from "styled-components";

const dashLength = "50px";
const dashWidth = "2px";

export const UnderConstructionContainer = styled.div`
  ${
    "" /* display: flex;
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
  } */
  }

  h1 {
    color: #1bdfb0;
    font-weight: 400;
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 123px;
    font-size: 2em;
    padding: 0.5em;
    line-height: 1;
    background-position: left top, right bottom, left bottom, right top;
    background-size: 50px 100%, 100% 50px, 50px 100%, 100% 50px;
    background-repeat: no-repeat;
  }

  .box-h {
    // Animated
    background-image: repeating-linear-gradient(
        0deg,
        #1bdfb0,
        #1bdfb0 10px,
        transparent 10px,
        transparent 20px
      ),
      /* left */
        repeating-linear-gradient(
          90deg,
          #1bdfb0,
          #1bdfb0 10px,
          transparent 10px,
          transparent 20px
        ),
      /* top */
        repeating-linear-gradient(
          180deg,
          #1bdfb0,
          #1bdfb0 10px,
          transparent 10px,
          transparent 20px
        ),
      /* right */
        repeating-linear-gradient(
          270deg,
          #1bdfb0,
          #1bdfb0 10px,
          transparent 10px,
          transparent 20px
        )
        /* bottom */;
    background-size: 2px calc(100% + 20px), calc(100% + 20px) 2px,
      2px calc(100% + 20px), calc(100% + 20px) 2px;
    animation: boxBorderAnimation 1s infinite linear;

    @keyframes boxBorderAnimation {
      from {
        background-position: 0 0, -20px 0, 100% -20px, 0 100%;
      }
      to {
        background-position: 0 -20px, 0 0, 100% 0, -20px 100%;
      }
    }
  }
`;
