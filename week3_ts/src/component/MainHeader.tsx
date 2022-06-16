import { HandsomeGuy } from "@/assets/images";
import styled from "styled-components";

interface MainHeaderProps {
    round: string;
    matchWinners: React.MutableRefObject<HandsomeGuy[]>;
    fighterList: HandsomeGuy[];
}

export default function MainHeader(props: MainHeaderProps) {
    const { round, matchWinners, fighterList } = props;

    // 현재 몇 라운드인지
    const countRoundNum = (): number => {
        return matchWinners.current.length + 1;
    };
    // 이번 강에는 총 몇 번의 라운드가 있는지
    const totalRoundNum = (): number => {
        return Math.ceil((fighterList.length + matchWinners.current.length * 2) / 2);
    };

    return (
        <>
            <GameTitle>내가 사랑하는 남성 월드컵 {round}</GameTitle>
            <GameRound>
                {countRoundNum()}/{totalRoundNum()}
            </GameRound>
        </>
    );
}

const GameTitle = styled.header`
    font-size: 4rem;
    margin: 2rem 0;
`;

const GameRound = styled.div`
    font-size: 4rem;
    margin: 1.5rem 0;
    color: purple;
    font-weight: bold;
`;
