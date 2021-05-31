import React from 'react';
import styled from 'styled-components';

const BaseBtn = styled.button`
  border: none;
  cursor: pointer;
  font: inherit;
  color: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  width: ${(p) => (p.width ? `${p.width}` : 'auto')};
`;

const UnstyledBtn = styled(BaseBtn)`
  background-color: transparent;
`;

const PrimaryBtn = styled(BaseBtn)`
  background-color: var(--color-accent);
  color: var(--color-white);
  height: 48px;
  width: ${(p) => (p.width ? `${p.width}` : '160px')};
  font-size: 0.8125rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-accent-hover);
  }
`;

const SecondaryBtn = styled(BaseBtn)`
  background-color: transparent;
  border: 1px solid var(--color-black);
  color: var(--color-black);
  height: 48px;
  width: ${(p) => (p.width ? `${p.width}` : '160px')};
  font-size: 0.8125rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;

const TextBtn = styled(BaseBtn)`
  font-weight: 500;
  font-size: 0.9375rem;
  text-transform: revert;
  letter-spacing: revert;
  background-color: transparent;
  color: var(--color-black);
  opacity: 50%;
  text-decoration: underline;
`;

const CategoryBtn = styled(BaseBtn)``;

function Button({
  variant = 'primary', onClick, width, children,
}) {
  let Component;
  if (variant === 'unstyled') {
    Component = UnstyledBtn;
  } else if (variant === 'primary') {
    Component = PrimaryBtn;
  } else if (variant === 'secondary') {
    Component = SecondaryBtn;
  } else if (variant === 'text') {
    Component = TextBtn;
  } else if (variant === 'category') {
    Component = CategoryBtn;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component onClick={onClick} width={width}>
      {children}
    </Component>
  );
}

export default Button;
