import React from 'react'
import {Router, Switch, Route} from 'react-router-dom'

import history from '../../services/history'
import AsyncComponent from '../../components/AsyncComponent';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'

// import Home from '../Home'
const AsyncHome = AsyncComponent(() => import('../Home'))

export default function App() {
	return (
		<Router history={history}>
			<main>
				<Header />
				<Switch>
					<Route exact path='/' component={AsyncHome} fallback={Loading} />
				</Switch>
				<Footer />
			</main>
		</Router>
	);
}
