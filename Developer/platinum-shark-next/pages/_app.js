/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import '../styles/globals.css';
import {BreakpointProvider} from 'react-socks';

// STYLED COMPONENTS SETUP
import darkTheme from './theme/dark';
import lightTheme from './theme/light';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from '../styles/globalStyles';

// FUNCTIONS IMPORT
import setThemeFunction from './functions/setTheme';
import getThemeFunction from './functions/getTheme';

function MyApp({Component, pageProps}) {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    getTheme();
  }, []);

  const handleThemeChange = () => {
    setThemeFunction(!theme);
    setTheme(!theme);
  };

  const getTheme = () => {
    const theme = getThemeFunction();
    const parsedTheme = JSON.parse(theme);
    setTheme(parsedTheme);
  };

  return (
    <BreakpointProvider>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <Component {...pageProps} setTheme={handleThemeChange} theme={theme} />
        <GlobalStyles />
      </ThemeProvider>
    </BreakpointProvider>
  );
}

export default MyApp;
