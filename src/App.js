import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import * as serviceWorker from './serviceWorker';

import HeaderContainer from './components/header/HeaderContainer'

import home from './pages/home';
import NewProduct from './pages/NewProduct'

import login from './pages/login'
import signup from './pages/signup'

import AuthRoute from './util/AuthRoute'

import NotFound from './components/not-found/NotFound'

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
	const decodedToken = jwtDecode(token);
	if(decodedToken.exp * 1000 < Date.now()) {
		window.location.href = '/login'
		authenticated = false;
	} else {
		authenticated = true;
	}

}

class App extends React.Component {
	render(){
		return(
			<Router>
				<div>
					<HeaderContainer/>
					<Switch>
						<Route exact path="/" component={home}/>
						<AuthRoute exact path="/login" component={login} authenticated={authenticated} />
						<AuthRoute exact path="/signup" component={signup} authenticated={authenticated} />
						<Route exact path="/new" component={NewProduct}/>

						<Route component={NotFound}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App