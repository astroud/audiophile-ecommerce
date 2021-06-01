import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../logoIcon/logoIcon';
import FacebookIcon from '../facebookIcon/facebookIcon';
import TwitterIcon from '../twitterIcon/twitterIcon';
import InstagramIcon from '../instagramIcon/instagramIcon';

const PHONE_BREAKPOINT = '530px';
const TABLET_BREAKPOINT = '768px';
const DESKTOP_BREAKPOINT = '1280px';
const MOBILE_SIDE_PADDING = '1.5rem';

const FooterWrapper = styled.div`
  display: grid;
  gap: 3rem;
  margin-top: 7.5rem;

  a {
    color: var(--color-white);

    &:hover {
      color: var(--color-accent-hover);
    }
  }

  padding: 0 ${MOBILE_SIDE_PADDING} 3rem ${MOBILE_SIDE_PADDING};
  background: var(--background-footer);
  color: #FFFFFF;
  
  > * {
    margin: 0 auto;
  }

  hr {
    width: 101px;
    height: 4px;
    background: var(--color-accent);
    border: none;
    
    @media(min-width: ${PHONE_BREAKPOINT}) {
      grid-column: span 2;
    }
  }

  @media(min-width: ${PHONE_BREAKPOINT}) {
    grid-template-rows: repeat(5);
    grid-template-columns: repeat(1, 3fr 1fr);
    gap: 2rem;
    margin-top: 6rem;

    > * {
      margin: 0;
    }
  }

  @media(min-width: ${DESKTOP_BREAKPOINT}) {
    margin-top: 12.5rem;
    grid-template-columns: repeat(1, 1fr 1fr)
  }
`;

const Description = styled.p`
  mix-blend-mode: normal;
  opacity: 0.5;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.5625rem;

  @media(max-width: ${PHONE_BREAKPOINT}) {
    text-align: center;
  }

  @media(min-width: ${PHONE_BREAKPOINT}) {
    grid-column: span 2;
  }

  @media(min-width: ${DESKTOP_BREAKPOINT}) {
    grid-column: span 1;
  }
`;

const Copyright = styled.p`
  mix-blend-mode: normal;
  opacity: 0.5;

  @media(min-width: ${PHONE_BREAKPOINT}) {
    grid-column: span 1;
  }
`;

const SocialLinks = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;

  @media(min-width: ${TABLET_BREAKPOINT}) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    grid-column: 2;
    grid-row: 5;
  }

  @media(min-width: ${DESKTOP_BREAKPOINT}) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    grid-column: 2;
    grid-row: 3;
  }
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media(min-width: ${PHONE_BREAKPOINT}) {
    grid-column: span 2;
  }

  @media(min-width: ${DESKTOP_BREAKPOINT}) {
    grid-column: span 1;
    text-align: right;
  }

  li {
    text-align: center;
    margin-bottom: 1rem;
  }

  li:last-child {
    margin-bottom: 0;
  }

  a {    
    font-family: 'Manrope';
    font-style: normal;
    font-weight: bold;
    font-size: 0.8125rem;
    line-height: 1.5625rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    text-decoration: none;
  }

  @media(min-width: ${PHONE_BREAKPOINT}) {
    li {
      display: inline-block;
      margin-bottom: 0;
      margin-right: 2.125rem;
    }
  }

  @media(min-width: ${DESKTOP_BREAKPOINT}) {
    li:last-child {
      margin-right: 0;
    }
  }
`;

const Footer = () => (

  <FooterWrapper>
    <hr />
    <a href="/" label="link to homepage"><LogoIcon /></a>
    <Menu>
      <li><a href="/">Home</a></li>
      <li><a href="/">Headphones</a></li>
      <li><a href="/">Speakers</a></li>
      <li><a href="/">Earphones</a></li>
    </Menu>
    <Description>
      Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a
      small team of music lovers and sound specialists who are devoted to
      helping you get the most out of personal audio. Come and visit our demo
      facility - we&apos;re open 7 days a week.
    </Description>
    <Copyright>Copyright 2021. All Rights Reserved</Copyright>
    <SocialLinks>
      <a href="/" label="facebook link"><FacebookIcon /></a>
      <a href="/" label="twitter link"><TwitterIcon /></a>
      <a href="/" label="instragram link"><InstagramIcon /></a>
    </SocialLinks>
  </FooterWrapper>
);

export default Footer;
