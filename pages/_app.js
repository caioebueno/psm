/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import { BreakpointProvider } from 'react-socks';
import Head from 'next/head';

// STYLED COMPONENTS SETUP
import darkTheme from '../theme/dark';
import lightTheme from '../theme/light';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globalStyles';

// FAVICON
import favicon0 from '../public/1.png';
import favicon1 from '../public/2.png';
import favicon2 from '../public/3.png';
import favicon3 from '../public/4.png';
import favicon4 from '../public/5.png';
import favicon6 from '../public/6.png';
const faviconArray = [favicon0, favicon1, favicon2, favicon3, favicon4, favicon6];

// FUNCTIONS IMPORT
import setThemeFunction from '../functions/setTheme';
import getThemeFunction from '../functions/getTheme';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(true);
  const [favicon, setFavicon] = useState(favicon1);

  useEffect(() => {
    getTheme();
    setInterval(animateFavicon, 500);
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

  let i = 0;

  const animateFavicon = () => {
    if (i > faviconArray.length) {
      setFavicon(faviconArray[0]);
      i = 0;
    }
    else {
      setFavicon(faviconArray[i + 1]);
      i = i + 1;
    }
  };

  return (

    <BreakpointProvider>
      <Head>
        <link rel="icon" href={favicon} type="image/gif" />
      </Head>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <Component {...pageProps} setTheme={handleThemeChange} theme={theme} />
        <GlobalStyles />
      </ThemeProvider>
    </BreakpointProvider>
   
  );
}

export default MyApp;
