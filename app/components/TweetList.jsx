import React from 'react';

import Tweet from './Tweet';

export default class TweetList extends React.Component {
  render() {
    let tweets = this.props.tweets.map(tweet => {
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
