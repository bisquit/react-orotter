import React from 'react';

import Signin from './Signin';
import Signup from './Signup';

export default class Login extends React.Component {
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	}

	constructor(props, context) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.transitionToMainPage = this.transitionToMainPage.bind(this, context.router);
	}

	handleLogin(user) {
		console.log('Login: ', user);
		window.sessionStorage.setItem('user', JSON.stringify(user));
		this.transitionToMainPage();
	}

	transitionToMainPage(router) {
		router.push({
			pathname: '/'
		})
	}

	render() {
		return (
			<div className="login">
				<h1 className="login-logo">oRotter</h1>
    		<Signin className="login-signin" onSignin={this.handleLogin} />
				<div className="login-signup">
					<Signup onSignup={this.handleLogin} />
				</div>
			</div>
		);
	}
}
