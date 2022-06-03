import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom';
import theme from 'style/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
