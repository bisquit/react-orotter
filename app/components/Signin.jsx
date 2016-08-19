import React from 'react';

import Input from './Input.jsx';
import Button from './Button.jsx';

export default class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let value = event.target.value;
		switch (event.target.name) {
			case 'username':
				return this.setState({
					username: value
				})
			case 'password':
				return this.setState({
					password: value
				})
		}
	}

	handleSubmit(event) {
		event.preventDefault();
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
		this.props.onSignin && this.props.onSignin(mockUser)
	}

	render() {
		let { className } = this.props;
		return (
			<form className={className} onSubmit={this.handleSubmit}>
				<Input name="username" placeholder="ユーザー名" value={this.state.username} onChange={this.handleChange} />
				<Input name="password" placeholder="パスワード" value={this.state.password} onChange={this.handleChange} />
				<Button size="large">ログイン</Button>
			</form>
		)
	}
}
