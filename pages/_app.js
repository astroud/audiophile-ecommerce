/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');

  * {  // css reset
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

  html {
    --color-accent: #D87D4A;
    --background-footer: #101010;
    --background-light: #F1F1F1;
    --background: #FAFAFA;
    
    --color-accent-hover: #fbaf85;
    --color-white: #FFFFFF;  // Needs a semantic or more descriptive name

    --background-navbar: #000000;
    --background-hero: #000000;
  }

  body {
    font-family: 'Manrope', sans-serif;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
