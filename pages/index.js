import React from 'react';
import LogoIcon from '../components/logoIcon/logoIcon';
import FacebookIcon from '../components/facebookIcon/facebookIcon';
import TwitterIcon from '../components/twitterIcon/twitterIcon';
import InstagramIcon from '../components/instagramIcon/instagramIcon';
import HamburgerIcon from '../components/hamburgerIcon/hamburgerIcon';
import CartIcon from '../components/cartIcon/cartIcon';
import CheckmarkIcon from '../components/checkmarkIcon/checkmarkIcon';
import Button from '../components/button/button';
import CategoryButtons from '../components/categoryButtons/categoryButtons';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '3rem',
        background: '#FAFAFA',
      }}
    >
      <div
        style={{
          background: '#000',
          color: '#fff',
          padding: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <LogoIcon />
        <LogoIcon fill="var(--color-accent)" width="286" height="50" />

        <a
          href="https://facebook.com"
          title="our facebook page"
          aria-label="a link to our facebook page"
        >
          <FacebookIcon />
        </a>
        <FacebookIcon
          fill="var(--color-accent)"
          width="48"
          height="48"
        />
        <TwitterIcon />
        <TwitterIcon
          fill="var(--color-accent)"
          width="48"
          height="40"
        />
        <InstagramIcon />
        <InstagramIcon
          fill="var(--color-accent)"
          width="48"
          height="48"
        />
        <HamburgerIcon />
        <HamburgerIcon
          fill="var(--color-accent)"
          width="32"
          height="30"
        />
        <CartIcon />
        <CartIcon fill="var(--color-accent)" width="46" height="40" />
        <CheckmarkIcon />
        <CheckmarkIcon
          fill="var(--color-accent-hover)"
          stroke="var(--color-accent)"
          width="92"
          height="92"
        />
        <div style={{ background: '#FFF', padding: '50px' }}>
          <Button>See Product</Button>
          <Button variant="secondary">See Product</Button>
          <Button variant="unstyled">
            <CartIcon fill="var(--color-accent)" />
          </Button>
          <Button variant="text">Remove All</Button>
          <Button variant="category" />
        </div>

      </div>
      <CategoryButtons categories={['headphones', 'speakers', 'earphones']} />
    </div>
  );
}
