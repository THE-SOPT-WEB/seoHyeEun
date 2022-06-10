import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
