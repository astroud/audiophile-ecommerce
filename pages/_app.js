/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  /* Tweaked RESET from https://piccalil.li/blog/a-modern-css-reset */

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Remove list styles on ul, ol elements */
  ul,
  ol {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* GLOBAL STYLES */
  html {
    --color-accent: #D87D4A;
    --background-footer: #101010;
    --background-light: #F1F1F1;
    --background: #FAFAFA;
    
    --color-accent-hover: #fbaf85;
    --color-white: #FFFFFF;  // Needs a semantic or more descriptive name
    --color-black: #000000;
  }

  body {
    font-family: 'Manrope', sans-serif;
  }
`;

export default MyApp;
