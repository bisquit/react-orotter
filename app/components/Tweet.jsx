import React from 'react';

import Avatar from './Avatar';
import StarCount from './StarCount';

function Tweet({ userImage, userName, userNickname, tweetText }) {
  return (
    <div className="tweet">
      <div className="tweet-user-photo">
        <Avatar image={userImage} />
      </div>
      <div className="tweet-body">
        <div className="tweet-user-info">
          <div className="tweet-user-name">{userName}</div>
          <div className="tweet-user-username">{userNickname}</div>
        </div>
        <div className="tweet-text">
          {tweetText}
        </div>
        <div className="tweet-star">
          <StarCount />
        </div>
      </div>
    </div>
  )
}

export default Tweet;