import React from 'react'
import {Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'

import history from '../../services/history'
import AsyncComponent from '../../components/AsyncComponent';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'

import {App} from './styled';
import theme from '../../services/theme'

// import Home from '../Home'
const AsyncHome = AsyncComponent({
	importComponent:  () => import('../Home'),
	loading: <Loading />
})

export default function() {
	return (
		<ThemeProvider theme={theme}>
			<Router history={history}>
				<App>
					<Header />
					<Switch>
						<Route exact path='/' component={AsyncHome} />
					</Switch>
					<Footer />
				</App>
			</Router>
		</ThemeProvider>
	);
}
