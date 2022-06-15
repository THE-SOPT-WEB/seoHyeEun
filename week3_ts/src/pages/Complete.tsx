import MainHeader from "@/component/common/MainHeader";
import Tournament from "@/component/common/Tournament";
import styled from "styled-components";

export default function Complete() {
    return (
        <StyledRoot>
            <MainHeader />
            <Tournament />
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
