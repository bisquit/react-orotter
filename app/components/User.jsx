import React from 'react';

import Avatar from './Avatar';
import Button from './Button';

const mockUser = {
  "id": 1,
  "username": "balmychan",
  "name": "Ayumi Goto",
  "image": "https://pbs.twimg.com/profile_images/1286698114/KM56TsK9",
  "created_at": "2015-08-05T06:50:24.000Z",
  "updated_at": "2015-08-05T06:50:24.000Z",
  "follows_count": 20,
  "followers_count": 20,
  "tweets_count": 1200
};

function User() {
	return (
		<div className="user">
			<div className="user-image">
				<Avatar image={mockUser.image} />
			</div>
			<div className="user-body">
				<div className="user-name">{mockUser.name}</div>
				<div className="user-nickname">{mockUser.username}</div>
				<div className="user-follow">
					<Button>フォロー</Button>
				</div>
			</div>
		</div>
	);
}

export default User;