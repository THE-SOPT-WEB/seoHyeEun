import styled from "styled-components";

export default function MainHeader() {
    return (
        <>
            <GameTitle>내가 사랑하는 남성 월드컵 {round}</GameTitle>
            <GameRound>
                {countRoundNum()}/{totalRoundNum()}
            </GameRound>
        </>
    );
}

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
