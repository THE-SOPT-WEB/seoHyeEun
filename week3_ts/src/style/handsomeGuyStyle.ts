import styled from "styled-components";

export const handsomeGuyStyle = {
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
