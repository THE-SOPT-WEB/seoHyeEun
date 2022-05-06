import styled from "styled-components";

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lavender;
  height: 100%;
  position: relative;
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
  justify-content: center;
  width: 78rem;
  article {
    width: 50%;
    height: auto;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;

    img {
      width: 90%;
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
    }
  }
  p {
    position: absolute;
    top: 57%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 10rem;
    font-weight: bold;
    color: #ffffff;
    text-shadow: -0.4rem 0 purple, 0 0.2rem purple, 0.2rem 0 purple,
      0 -0.2rem purple;
    font-style: italic;
  }
`;

export const GameResetButton = styled.button`
  width: 12rem;
  font-size: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  cursor: pointer;
  color: purple;
  font-weight: bold;
  border: 0.2rem solid purple;
  border-radius: 20rem;

  :hover {
    background-color: gold;
  }
`;
