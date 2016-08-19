import React from 'react';

function Input({ style, size, placeholder, ...others }) {
	let height =  size === 'large' ? 48 : 40;
	let lineHeight = size === 'large' ? 48 : 40;
	let styles = { height, lineHeight, ...style };

	return (
		<input {...others} className="input" type="text" style={styles} placeholder={placeholder} />
	);
}

export default Input;
