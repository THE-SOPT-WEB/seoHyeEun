import handsomeGuys from "@/core/handsomeGuys";
import MainHeader from "@/components/main/MainHeader";
import Tournament from "@/components/main/Tournament";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface HandsomeGuy {
    name: string;
    url: string;
}

export default function Main() {
    // 배열 랜덤으로 재정렬
    const randomGameInfo: HandsomeGuy[] = handsomeGuys.sort(() => Math.random() - 0.5);

    const [round, setRound] = useState<string>("16강");
    const matchWinners = useRef<HandsomeGuy[]>([]);
    const [fighterList, setFighterList] = useState<HandsomeGuy[]>(randomGameInfo);
    const navigation = useNavigate();

    const checkLists = (round: string) => {
        setRound(round);
        setFighterList(matchWinners.current);
        matchWinners.current = [];
    };

    // 화면이 리렌더링 될 때 마다 참가자들 배열과 승리자들 배열 확인

    useEffect(() => {
        if (fighterList.length === 0 && matchWinners.current.length >= 8) checkLists("8강");
        else if (fighterList.length === 0 && matchWinners.current.length >= 4) checkLists("4강");
        else if (fighterList.length === 0 && matchWinners.current.length >= 2) checkLists("결승");
        else if (fighterList.length === 0 && matchWinners.current.length === 1) {
            navigation("/complete", {
                // navigation에 값을 다중으로 넘겨주는 방법
                state: { matchWinners },
            });
        }
    }, [fighterList, matchWinners.current]);

    return (
        <StyledRoot>
            <MainHeader round={round} matchWinners={matchWinners} fighterList={fighterList} />
            <Tournament
                matchWinners={matchWinners}
                fighterList={fighterList}
                setFighterList={setFighterList}
            />
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
