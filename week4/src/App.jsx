import Main from 'pages/Main';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import { theme } from 'styles/theme';
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
