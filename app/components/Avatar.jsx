import React from 'react';

function Avatar({ image, width }) {
	const styles = {
		width: `${width}px`,
		height: `${width}px`
	}
	return (
		<div className="avatar" style={styles}>
			<img className="avatar-image" src={image} alt=""/>
		</div>
	);
}

export default Avatar;
