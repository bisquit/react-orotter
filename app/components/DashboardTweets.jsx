import React from 'react';

import Remark from './Remark';
import TweetList from './TweetList';

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

function DashboardTweets(props, context) {
  const handleRemark = (value) => {
    console.log('Remark: ', value);
  }

  return (
    <div className="dashboard-tweets">
      <div className="dashboard-tweets-card">
        <Remark user={context.user} onRemark={handleRemark} />
      </div>
      <div className="dashboard-tweets-card">
        <TweetList tweets={mockTweets} />
      </div>
    </div>
  )
}

DashboardTweets.contextTypes = {
  user: React.PropTypes.object
}

export default DashboardTweets;
