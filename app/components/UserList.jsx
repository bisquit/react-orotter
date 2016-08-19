import React from 'react';

import User from './User';

export default class UserList extends React.Component {
  static defaultProps = {
    column: 1
  }

  constructor(props) {
    super(props);
  }
  render() {
    let users = this.props.users.map(user => {
      return (
        <div className="user-list-item" key={user.id}>
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
