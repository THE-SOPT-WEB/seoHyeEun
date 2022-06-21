import { css, DefaultTheme } from "styled-components";

const fontSizes = {
    form: "4rem",
    searchTitle: "4rem",
    input: "2.8rem",
    placeName: "1.5rem",
    roadAddressName: "1.5rem",
    phone: "1.5rem",
};

const colors = {
    black: "#333333",
    white: "#ffffff",
    lemonchiffon: "#fffacd",
    gray: "#6B7280",
    skeleton: "#808080",
    skyblue: "87ceeb",
    lightgreen: "99f299",
};

const flexColumnCenter = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const theme: DefaultTheme = {
    fontSizes,
    colors,
    flexColumnCenter,
};

export default theme;
