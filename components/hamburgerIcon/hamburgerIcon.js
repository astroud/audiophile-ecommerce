import React from 'react';

const HamburgerIcon = ({ fill, width, height }) => (
	<svg
		aria-label="hamburger menu icon"
		width={width || '16'}
		height={height || '15'}
		viewBox="0 0 16 15"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g fill={fill || 'currentColor'} fillRule="evenodd">
			<path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
		</g>
	</svg>
);

export default HamburgerIcon;
