import React from 'react';
import { Link } from 'react-router';

import Avatar from './Avatar';
import SearchInput from './SearchInput';
import Button from './Button';

export default class Header extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object,
    router: React.PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.transitionToSearch = this.transitionToSearch.bind(this, context.router);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSearch(keyword) {
    console.log('Search: ', keyword);
    this.transitionToSearch(keyword);
  }

  transitionToSearch(router, keyword) {
    router.push({
      pathname: '/search',
      query: {
        keyword: keyword
      }
    })
  }

  handleLogout() {
    window.sessionStorage.removeItem('user');
    this.context.router.push({
      pathname: '/login'
    })
  }

  render() {
    const avatar = this.context.user
      ? <Avatar image={this.context.user.image} width={50} />
      : null

    return (
      <header className="header">
        <div className="header-inner">
          <div className="header-logo">
            <Link to="/">oRotter</Link>
          </div>
          <div className="header-search">
            <SearchInput onSearch={this.handleSearch} />
          </div>
          <div className="header-avatar">
            {avatar}
          </div>
          <div className="header-logout">
            <Button onClick={this.handleLogout}>ログアウト</Button>
          </div>
        </div>
      </header>
    )
  }
}
