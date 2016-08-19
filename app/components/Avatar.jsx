import React from 'react';

function Avatar({ image, width }) {
	return (
		<div className="avatar" style={{ width: width, height: width }}>
			<img className="avatar-image" src={image} alt=""/>
		</div>
	);
}

export default Avatar;