import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../css/registration.css';

type AppProps = {}

export class Registration extends React.Component<{}> {
	constructor(props: AppProps) {
		super(props);
	}
	render() {
		return (
			<div className="registration-container">
				<React.Fragment>
					<Typography variant="h6" gutterBottom>
						Register Now!
					</Typography>
					<Grid container spacing={24}>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="firstName"
								name="firstName"
								label="First name"
								fullWidth
								autoComplete="fname"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="lastName"
								name="lastName"
								label="Last name"
								fullWidth
								autoComplete="lname"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								id="email"
								name="email"
								label="E-mail Address"
								type="email"
								fullWidth
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="username"
								name="username"
								label="Username"
								fullWidth
								autoComplete="username"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField 
								required
								id="password"
								name="password"
								label="Password"
								type="password"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							{/*Needed for spacing purposes - No functionality*/}
						</Grid>
					</Grid>
					<Button className="button" variant="contained" color="primary">Register</Button>
				</React.Fragment>
			</div>
		);
	}
}
