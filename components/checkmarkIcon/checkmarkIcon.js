import React from 'react';

const CheckmarkIcon = ({ fill, stroke, width, height }) => (
	<svg
		aria-label="Success Indicator"
		width={width || '64'}
		height={height || '64'}
		viewBox="0 0 64 64"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="32" cy="32" r="32" fill={fill || '#D87D4A'} />
		<path
			d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
			stroke={stroke || '#fff'}
			strokeWidth="4"
		/>
	</svg>
);

export default CheckmarkIcon;
