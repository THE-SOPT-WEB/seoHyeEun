import { HandsomeGuy } from "@/core/handsomeGuys";
import React from "react";
import styled from "styled-components";

interface CompleteProps {
    matchWinners: React.MutableRefObject<HandsomeGuy[]>;
}

export default function WinnerSection(props: CompleteProps) {
    const { matchWinners } = props;

    return (
        <StyledRoot>
            <p>👑</p>
            <Winner.Info>
                <Winner.Img src={matchWinners.current[0].url} />
                <Winner.Name>{matchWinners.current[0].name}</Winner.Name>
            </Winner.Info>
        </StyledRoot>
    );
}

const StyledRoot = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    p {
        position: absolute;
        z-index: 999;
        font-size: 8rem;
    }
`;

const Winner = {
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
    Name: styled.div`
        position: absolute;
        top: 75%;
        left: 50%;
        font-size: 5rem;
        color: white;
        transform: translate(-50%, -50%);
        text-shadow: -0.2rem 0 black, 0 0.2rem black, 0.2rem 0 black, 0 -0.2rem black;
    `,
};
