import React from 'react';
import HamburgerIcon from '../components/hamburgerIcon/hamburgerIcon';
import CartIcon from '../components/cartIcon/cartIcon';
import CheckmarkIcon from '../components/checkmarkIcon/checkmarkIcon';
import Button from '../components/button/button';
import CategoryButtons from '../components/categoryButtons/categoryButtons';
import Footer from '../components/footer/footer';

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
      <CategoryButtons categories={['headphones', 'speakers', 'earphones']} />
      <Footer />
    </div>
  );
}
