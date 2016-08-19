import React from 'react';

function Button({ children, size, ...others }) {
	let classes = [
		'button',
		size
	].join(' ');
	return (
		<button {...others} className={classes}>{children}</button>
	);
}

export default Button;
