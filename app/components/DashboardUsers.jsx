import React from 'react';

import UserList from './UserList';

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
  "name": "Ayumi Goto23",
  "image": "https://pbs.twimg.com/profile_images/1286698114/KM56TsK9",
  "created_at": "2015-08-05T06:50:24.000Z",
  "updated_at": "2015-08-05T06:50:24.000Z",
  "follows_count": 20,
  "followers_count": 20,
  "tweets_count": 1200
}
]

function DashboardUsers() {
  return (
    <div className="dashboard-users">
      <div className="dashboard-users-card">
        <UserList users={mockUsers} />
      </div>
    </div>
  )
}

export default DashboardUsers;
