import React from 'react';
import { Router as BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-theme-tokens';
import history from '@app/utils/history';
import Routes from '@app/components/Routes';
import theme from '@app/theme';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme} variants={{ mode: 'dark' }}>
      <BrowserRouter history={history}>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
