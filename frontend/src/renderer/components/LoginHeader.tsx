import * as React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import '../css/login_header.css';

type AppProps = {}

export class LoginHeader extends React.Component<{}> {
	constructor(props: AppProps) {
		super(props);
		this.state = {
			user: {
				// Todo: Accept e-mail address as username (i.e. as a way to login)
				username: "",
				password: ""
			},

			snackbar: {
				open: false,
				message: ""
			}
		}
	}

	handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const user = this.state.user
		this.setState({
			user: { ...user, username: event.target.value }
		})
	}

	handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const user = this.state.user
		this.setState({
			user: { ...user, password: event.target.value }
		})
	}

	openSnackbar = (messageText: string) => {
		const snackbar = this.state.snackbar
		this.setState({ snackbar: {...snackbar, open: true, message: messageText }});
	};

	closeSnackbar = () => {
		const snackbar = this.state.snackbar
		this.setState({ snackbar: {...snackbar, open: false }});
	};

	render() {
		const login = (event: React.FormEvent) => {
			event.preventDefault();
			this.closeSnackbar();
			this.requestLogin();
		}

		return (
			<div className="login-header-container">
				<div className="left-block">
					<img src={require('../../../../doc/art/DM-Tools-Logo.png')} className="logo"></img>
				</div>
				<div className="right-block">
				<form onSubmit={login}>
					<Input className="input" id="username" placeholder="Username" name="username" autoComplete="username" value={this.state.user.username} onChange={this.handleUsernameChange} autoFocus required/>
					<Input className="input" id="password" placeholder="Password" name="password" type="password" autoComplete="current-password" value={this.state.user.password} onChange={this.handlePasswordChange} required/>
					<Button className="button" variant="contained" color="primary" type="submit">Login</Button>
				</form>
				</div>
					<Snackbar
						open={this.state.snackbar.open}
						message={<span id="message-id">{this.state.snackbar.message}</span>}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left'
						}}
						action={[
							<IconButton
								key="close"
								aria-label="Close"
								color="inherit"
								onClick={this.closeSnackbar}
							>
								<CloseIcon/>
							</IconButton>
						]}
					/>
			</div>
		);
	}


	requestLogin() {
		var context = this;
		var request = require("request");
		var options = { method: 'POST',
			url: 'http://3.17.205.229:3000/login',
			headers:
			{
				'Cache-Control': 'no-cache',
				'Content-Type': 'application/json'
			},
			body:
			{
				username: this.state.user.username,
				password: this.state.user.password
			},
			json: true
		};

		request(options, function (error:string, response:string, body:string) {
			var message = response.body.message;
			var token = response.body.token;
			context.openSnackbar(message);
			
			if (error) throw new Error(error);
		});
	}
}
