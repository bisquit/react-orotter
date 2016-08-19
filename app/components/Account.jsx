import React from 'react';

import Divider from './Divider.jsx';

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

function Stat({ label, value }) {
  return (
    <div className="account-stat">
      <div className="account-stat-label">{label}</div>
      <div className="account-stat-value">{value}</div>
    </div>
  );
}

function Stats({ tweetsCount, followsCount, followersCount }) {
  return (
    <div className="account-stats">
      <Stat label="つぶやき数" value={tweetsCount} />
      <Divider />
      <Stat label="フォロー数" value={followsCount} />
      <Divider />
      <Stat label="フォロワー数" value={followersCount} />
    </div>
  );
}

export default class Account extends React.Component {
  render() {
    return (
      <div className="account">
        <div className="account-profile">
          <div className="account-profile-image">
            <img src={mockUser.image} />
          </div>
          <div>
            <div className="account-profile-name">{mockUser.name}</div>
            <div className="account-profile-username">@{mockUser.username}</div>
          </div>
        </div>
        <Stats
          tweetsCount={mockUser.tweets_count}
          followsCount={mockUser.followers_count}
          followersCount={mockUser.followers_count}
        />
      </div>
    )
  }
}
