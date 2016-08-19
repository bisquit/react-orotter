import React from 'react';

import User from './User';

const mockUsers = [
  {
  "id": 1,
  "username": "balmychan",
  "name": "Ayumi Goto",
  "image": "https://pbs.twimg.com/profile_images/1286698114/KM56TsK9",
  "created_at": "2015-08-05T06:50:24.000Z",
  "updated_at": "2015-08-05T06:50:24.000Z",
  "follows_count": 20,
  "followers_count": 20,
  "tweets_count": 1200
},
{
  "id": 2,
  "username": "balmychan2",
  "name": "Ayumi Goto2",
  "image": "https://pbs.twimg.com/profile_images/1286698114/KM56TsK9",
  "created_at": "2015-08-05T06:50:24.000Z",
  "updated_at": "2015-08-05T06:50:24.000Z",
  "follows_count": 20,
  "followers_count": 20,
  "tweets_count": 1200
}
]

export default class UserList extends React.Component {
  static defaultProps = {
    column: 1
  }
  
  constructor(props) {
    super(props);
  }
  render() {
    let users = mockUsers.map(user => {
      return (
        <div className="user-list-item">
          <User user={user} />
        </div>
      );
    })
    return (
      <div className="user-list">
        {users}
      </div>
    )
  }
}
