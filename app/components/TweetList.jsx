import React from 'react';

import Tweet from './Tweet';

const mockTweets = [
  {
    "id": 1,
    "user_id": 1,
    "text": "オロなう",
    "created_at": "2015-08-05T06:50:24.000Z",
    "updated_at": "2015-08-05T06:50:24.000Z",
    "favorites": 100,
    "user": {
      "id": 1,
      "username": "balmychan",
      "name": "Ayumi Goto",
      "image": "https://pbs.twimg.com/profile_images/1286698114/KM56TsK9",
      "created_at": "2015-08-05T06:50:24.000Z",
      "updated_at": "2015-08-05T06:50:24.000Z",
      "follows_count": 20,
      "followers_count": 20,
      "tweets_count": 1200
    }
  },
  {
    "id": 2,
    "user_id": 1,
    "text": "オロなうなう",
    "created_at": "2015-08-05T06:50:24.000Z",
    "updated_at": "2015-08-05T06:50:24.000Z",
    "favorites": 100,
    "user": {
      "id": 1,
      "username": "balmychan",
      "name": "Ayumi Goto",
      "image": "https://pbs.twimg.com/profile_images/1286698114/KM56TsK9",
      "created_at": "2015-08-05T06:50:24.000Z",
      "updated_at": "2015-08-05T06:50:24.000Z",
      "follows_count": 20,
      "followers_count": 20,
      "tweets_count": 1200
    }
  }
]

export default class TweetList extends React.Component {
  render() {
    let tweets = mockTweets.map(tweet => {
      return (
        <Tweet
          key={tweet.id}
          userImage={tweet.user.image}
          userName={tweet.user.name}
          userNickname={tweet.user.username}
          tweetText={tweet.text}
        />
      )
    });
    return (
      <div className="tweetlist">
        {tweets}
      </div>
    )
  }
}
