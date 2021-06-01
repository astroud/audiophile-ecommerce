import React from 'react';
import styled, { keyframes } from 'styled-components';

const PHONE_BREAKPOINT = '468px';
const TABLET_BREAKPOINT = '768px';

const float = keyframes`
  \ 0% {
    transform: translatey(0rem);
  }

  \ 50% {
    transform: translatey(-1rem);
  }

  \ 100% {
    transform: translatey(0rem);
  }
`;

const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  background: var(--background);
  margin-top: 7.5rem;

  @media(max-width: ${TABLET_BREAKPOINT}) {
    margin-top: 6rem;
  }

  @media(max-width: ${PHONE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    margin-top: 7.5rem;
  }
`;

const Link = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 21.875rem;
  height: 12.75rem;
  margin-top: 5rem;
  padding-bottom: 1.875rem;
  border-radius: 0.5rem;
  background: var(--background-light);
  border: none;
  background-image: url("data:image/svg+xml,%3Csvg width='209' height='106' viewBox='0 0 209 106' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_f)'%3E%3Cellipse cx='104.5' cy='53' rx='61' ry='9' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f' x='0.00749207' y='0.507492' width='208.985' height='104.985' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='21.7463' result='effect1_foregroundBlur'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: top 1.5rem center;
  cursor: pointer;

  &:hover {
    img{
      animation: ${float} 5s ease-in-out infinite;
    }

    p {
      color: var(--color-accent-hover)
    }
  }

  img {
    margin-top: -5rem;
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    letter-spacing: 0.08035688rem;
    margin-bottom: -1rem;
  }
  
  p {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: bold;
    font-size: 0.8125rem;
    line-height: 1.125rem;
    letter-spacing: 0.0625rem;
    color: rgba(0,0,0,0.5);
    background: url("data:image/svg+xml,%3Csvg width='8' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.322 1l5 5-5 5' stroke='%23D87D4A' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center right;
    padding: 0 1.2rem 0 0rem;
  }

  @media(max-width: ${TABLET_BREAKPOINT}) {
    h2{
      font-size: 0.9375rem;
    }
  }

  @media(max-width: ${PHONE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    margin: 3rem 1.5rem 0 1.5rem;
    height: 10.3125rem;
    max-width: 20.4375rem;
    background-image: url("data:image/svg+xml,%3Csvg width='183' height='102' viewBox='0 0 183 102' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_f)'%3E%3Cellipse cx='91.4444' cy='51' rx='47.4444' ry='7' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f' x='0.507492' y='0.507492' width='181.874' height='100.985' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='21.7463' result='effect1_foregroundBlur'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A");
    background-position: top 0.5rem center;

    img {
      margin-top: -2.5rem;
      max-height: 6.5rem;
    }

    h2 {
      margin-bottom: -2rem;
      padding-bottom: 0.8rem;
    }

    p {
      margin-bottom: -0.8rem;
    }
  }
`;

const CategoryButtons = ({ categories }) => (
  <CategoryWrapper>
    {categories.map((category) => (
      <Link href="/">
        <img
          src={`./assets/images/${category}.png`}
          alt={`decoration on link to browse ${category}`}
          srcSet={`./assets/images/${category}-mobile.png 500w, ./assets/images/${category}.png`}
        />
        <h2>{category}</h2>
        <p>shop</p>
      </Link>
    ))}
  </CategoryWrapper>
);

export default CategoryButtons;
