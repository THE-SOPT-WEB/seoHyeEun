import Router from "./core/router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Router />
            </ThemeProvider>
        </>
    );
}
