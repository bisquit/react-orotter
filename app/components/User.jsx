import React from 'react';

import Avatar from './Avatar';
import Button from './Button';

function User({ user }) {
	return (
		<div className="user">
			<div className="user-image">
				<Avatar image={user.image} />
			</div>
			<div className="user-body">
				<div className="user-name">{user.name}</div>
				<div className="user-nickname">{user.username}</div>
				<div className="user-follow">
					<Button>フォロー</Button>
				</div>
			</div>
		</div>
	);
}

export default User;
