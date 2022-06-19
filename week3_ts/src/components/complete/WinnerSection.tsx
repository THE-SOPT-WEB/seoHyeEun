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
            <article>
                <img src={matchWinners.current[0].url} />
                <div>{matchWinners.current[0].name}</div>
            </article>
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
