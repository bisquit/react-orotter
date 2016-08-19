import React from 'react';

import Input from './Input.jsx';
import Button from './Button.jsx';

export default class Login extends React.Component {
	render() {
		return (
			<div className="login">
				<h1 className="login-logo">oRotter</h1>
				<div className="login-signin">
					<Input placeholder="ユーザー名" />
					<Input placeholder="パスワード" />
					<Button size="large">ログイン</Button>
				</div>
				<div className="login-signup">
					<form className="login-signup-form">
						<Input placeholder="ユーザー名" />
						<Input placeholder="名前" />
						<Input placeholder="画像URL" />
						<Input placeholder="パスワード" />
					</form>
					<div className="login-signup-register">登録</div>
				</div>
			</div>
		);
	}
}