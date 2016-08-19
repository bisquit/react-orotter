import React from 'react';
import StarIcon from 'react-icons/lib/ti/star';

function StarCount({ active, onToggle }) {
	let color = active ? '#f5a623' : '#d8d8d8';
	let handleStarClick = () => {
		onToggle();
	};

	return (
		<div className="star-count" style={{ color: color }} onClick={handleStarClick}>
			<StarIcon size={24} color={color} />
			<div className="star-count-number">10</div>
		</div>
	);
}

StarCount.defaultProps = {
	onToggle: () => {}
}

export default StarCount;