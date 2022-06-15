import Router from "@/component/common/Router";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Router />
            </ThemeProvider>
        </>
    );
}

export default App;
