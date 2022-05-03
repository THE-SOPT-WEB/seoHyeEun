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

    & > img {
      width: 100%;
      overflow: hidden;
    }
  }
`;
