import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { HandsomeGuy } from "@/assets/images";

interface CompleteLocation {
    checkLists(round: string): void;
    matchWinners: React.MutableRefObject<HandsomeGuy[]>;
}

export default function Complete() {
    const navigation = useNavigate();
    const location = useLocation();
    const { checkLists, matchWinners } = location.state as CompleteLocation;

    // 다시 게임을 시작하는 함수
    const playAgain = () => {
        matchWinners.current = [];
        checkLists("16강");
        navigation("/");
    };

    return (
        <StyledRoot>
            <GameTitle>내가 가장 사랑하는 남성은 {matchWinners.current[0].name}</GameTitle>
            <WinnerSection>
                <p>👑</p>
                <article>
                    <img src={matchWinners.current[0].url} />
                    <div>{matchWinners.current[0].name}</div>
                </article>
            </WinnerSection>
            <GameResetButton onClick={playAgain}>다시하기</GameResetButton>
        </StyledRoot>
    );
}

export const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lavender;
    height: 100vh;
    position: relative;
`;

export const GameTitle = styled.header`
    font-size: 4rem;
    margin: 2rem 0;
`;

export const WinnerSection = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    p {
        position: absolute;
        z-index: 999;
        font-size: 8rem;
    }
    article {
        width: 35rem;
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;

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
            text-shadow: -0.2rem 0 black, 0 0.2rem black, 0.2rem 0 black, 0 -0.2rem black;
        }
    }
`;

export const GameResetButton = styled.button`
    width: 12rem;
    font-size: 2rem;
    margin-top: 1.5rem;
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
