import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
    font-family: 'ParkYongJun';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/ParkYongJun.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
#root, body, html {
    width: 100%;
    height: auto;
    font-family: 'ParkYongJun';
  background-repeat: repeat;
  background-position: center;
  background-size: auto;
}
html {
    font-size: 62.5%;
}
* {
   
    box-sizing: border-box;
     font-family: 'ParkYongJun';

    }
`;

export default GlobalStyle;
