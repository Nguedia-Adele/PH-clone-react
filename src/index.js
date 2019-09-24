import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import * as serviceWorker from './serviceWorker';

import HeaderContainer from './components/header/HeaderContainer'

import home from './pages/home';
import NewProduct from './components/new-post/NewProduct'

import login from './pages/login'
import signup from './pages/signup'

import NotFound from './components/not-found/NotFound'

const routing = (
	<Router>
		<div>
			<HeaderContainer/>
			<Switch>
				<Route exact path="/" component={home}/>
				<Route exact path="/login" component={login}/>
				<Route exact path="/signup" component={signup}/>
				<Route exact path="/new" component={NewProduct}/>

				<Route component={NotFound}/>
			</Switch>
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
