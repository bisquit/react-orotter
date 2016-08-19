import React from 'react';

import Avatar from './Avatar.jsx';
import Button from './Button.jsx';
import TextField from './TextField';

export default class Remark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarImage: null
    };
  }
  componentDidMount() {
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
    this.setState({
      avatarImage: mockUser.image
    })
  }
  render() {
    return (
      <div className="remark">
        <div className="remark-avatar">
          <Avatar image={this.state.avatarImage} width="50" />
        </div>
        <div className="remark-body">
           <TextField placeholder="いま何してる？" />
          <div className="remark-nav">
            <div className="remark-char-count">
              0/140
            </div>
            <Button>送信</Button>
          </div>
        </div>
      </div>
    )
  }
}
