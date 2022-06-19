import { handsomeGuyStyle } from "@/style/handsomeGuyStyle";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface TournamentProps {
    matchWinners: React.MutableRefObject<HandsomeGuy[]>;
    fighterList: HandsomeGuy[];
    setFighterList: React.Dispatch<React.SetStateAction<HandsomeGuy[]>>;
}

interface HandsomeGuy {
    name: string;
    url: string;
}

export default function Tournament(props: TournamentProps) {
    const { matchWinners, fighterList, setFighterList } = props;

    // 승자를 골랐을 때
    const getSelectWinner = (pos: number) => {
        matchWinners.current.push(fighterList[pos]);
        setFighterList(fighterList.slice(2));
    };

    return (
        <GameSection>
            {fighterList.slice(0, 2).map((fighter, index) => {
                console.log(fighter);
                return (
                    <Fighter.Info onClick={() => getSelectWinner(index)} key={index}>
                        <Fighter.Img src={fighter.url} alt={`${fighter.name} 사진`} />
                        <Fighter.Name>{fighter.name}</Fighter.Name>
                    </Fighter.Info>
                );
            })}
            <p>VS</p>
        </GameSection>
    );
}

const GameSection = styled.section`
    display: flex;
    justify-content: center;
    height: 80%;

    p {
        position: absolute;
        top: 57%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 10rem;
        font-weight: bold;
        color: #ffffff;
        text-shadow: -0.4rem 0 purple, 0 0.2rem purple, 0.2rem 0 purple, 0 -0.2rem purple;
        font-style: italic;
    }
`;

const Fighter = {
    Info: styled.article`
        width: 100%;
        height: 100%;
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;
    `,
    Img: styled.img`
        width: 100%;
    `,
    Name: styled.strong`
        position: absolute;
        top: 75%;
        left: 50%;
        font-size: 5rem;
        color: white;
        transform: translate(-50%, -50%);
        text-shadow: -0.2rem 0 black, 0 0.2rem black, 0.2rem 0 black, 0 -0.2rem black;
    `,
};
