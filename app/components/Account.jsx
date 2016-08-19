import React from 'react';

import Divider from './Divider.jsx';
import Avatar from './Avatar';

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
  static contextTypes = {
    user: React.PropTypes.object
  }

  render() {
    const avatar = this.context.user
      ? <Avatar image={this.context.user.image} />
      : null;
    const stats = this.context.user
      ? (
        <Stats
          tweetsCount={this.context.user.tweets_count}
          followsCount={this.context.user.followers_count}
          followersCount={this.context.user.followers_count}
        />
      )
      : null;

    return (
      <div className="account">
        <div className="account-profile">
          <div className="account-profile-image">
            {avatar}
          </div>
          <div>
            <div className="account-profile-name">
              {this.context.user ? this.context.user.name : ''}
            </div>
            <div className="account-profile-username">
              {this.context.user ? '@' + this.context.user.username : ''}
            </div>
          </div>
        </div>
        {stats}
      </div>
    )
  }
}
