import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { HandsomeGuy } from "@/assets/images";
import WinnerSection from "@/component/WinnerSection";

interface CompleteLocation {
    matchWinners: React.MutableRefObject<HandsomeGuy[]>;
}

export default function Complete() {
    const navigation = useNavigate();
    const location = useLocation();
    const { matchWinners } = location.state as CompleteLocation;

    // 다시 게임을 시작하는 함수
    const playAgain = () => {
        navigation("/");
    };

    return (
        <StyledRoot>
            <GameTitle>내가 가장 사랑하는 남성은 {matchWinners.current[0].name}</GameTitle>
            <WinnerSection matchWinners={matchWinners} />
            <GameResetButton onClick={playAgain}>다시하기</GameResetButton>
        </StyledRoot>
    );
}

const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lavender;
    height: 100vh;
    position: relative;
    font-family: "HaenamFont";
`;

const GameTitle = styled.header`
    font-size: 4rem;
    margin: 2rem 0;
`;

const GameResetButton = styled.button`
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
