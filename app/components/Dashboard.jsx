import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Header from './Header';
import Account from './Account';

export default class Dashboard extends React.Component {
  static childContextTypes = {
    user: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  getChildContext() {
    return {
      user: this.state.user
    }
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
		}
    setTimeout(() => {
      this.setState({
        user: mockUser
      })
    }, 5000);
  }

  render() {
    return (
      <div className="dashboard">
        <Header />
        <div className="dashboard-body">
          <div className="dashboard-inner">
            <div className="dashboard-left">
              <div className="dashboard-card">
                <Account />
              </div>
              <div className="dashboard-card">

              </div>
            </div>
            <div className="dashboard-right">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
