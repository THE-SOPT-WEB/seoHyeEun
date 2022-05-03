import styled from "styled-components";

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lavender;
  height: 100%;
`;

export const GameTitle = styled.header`
  font-size: 4rem;
  margin: 2rem 0;
`;

export const GameRound = styled.div`
  font-size: 4rem;
  margin: 1.5rem 0;
  color: purple;
  font-weight: bold;
`;

export const GameSection = styled.section`
  display: flex;
  article {
    width: 50%;
    height: auto;
    cursor: pointer;
    position: relative;

    img {
      width: 100%;
    }
    div {
      position: absolute;
      top: 75%;
      left: 50%;
      font-size: 5rem;
      color: white;
      transform: translate(-50%, -50%);
      text-shadow: -0.2rem 0 black, 0 0.2rem black, 0.2rem 0 black,
        0 -0.2rem black;
      font-style: italic;
    }
  }
`;
