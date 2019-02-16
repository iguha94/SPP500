import * as React from 'react';
import {LoginHeader} from './components/LoginHeader';
import {Footer} from './components/Footer';
import {LandingPage} from './components/LandingPage';
import {Registration} from './components/Registration';

import './css/app.css';

type AppProps = {}

export class App extends React.Component<{}> {
	constructor(props: AppProps) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="header"><LoginHeader/></div>
			
				<div className="horizontal-block">
					<div className="align-left"><LandingPage/></div>
					<div className="align-right"><Registration/></div>
				</div>

				<div className="footer"><Footer/></div>
			</div>
		);
	}

}
