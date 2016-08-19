import React from 'react';


import Login from './Login.jsx';
import Header from './Header.jsx';
import Account from './Account.jsx';
import Remark from './Remark.jsx';
import TweetList from './TweetList.jsx';
import UserList from './UserList.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <Header />
        <main>
          <Account />
          <Remark />
          <TweetList />
          <UserList />
        </main>
      </div>
    );
  }
}
