import React from 'react';

function Button({ children, size }) {
	let classes = [
		'button',
		size
	].join(' ');
	return (
		<button className={classes}>{children}</button>
	);
}

export default Button;