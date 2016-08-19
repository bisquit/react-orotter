import React from 'react';

function TextField({ placeholder, ...others }) {
	return (
		<textarea {...others} className="textfield" placeholder={placeholder}></textarea>
	);
}

export default TextField;
