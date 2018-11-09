import React, {useState, useEffect} from 'react'
import {Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'

import history from '../../services/history'
import AsyncComponent from '../../components/AsyncComponent';

import {App} from './styled'
import GlobalStyles from './globalStyles'
import theme from '../../services/theme'

// import Home from '../Home'
const AsyncHome = AsyncComponent({
	importComponent:  () => import('../Home')
})

export default function() {
	const [loaded, setLoadingState] = useState(false)

	function renderApp() {
		return (
			<Router history={history}>
				<App>
					<GlobalStyles />
					<App.Body>
						<App.Content>
							<Switch>
								<Route path='/' component={AsyncHome} />
							</Switch>
						</App.Content>
					</App.Body>
				</App>
			</Router>
		)
	}

	useEffect(() => {
		setLoadingState(true)
	}, [loaded])

	return (
		<ThemeProvider theme={theme}>
			<React.Fragment>
			{loaded && renderApp()}
			</React.Fragment>
		</ThemeProvider>
	)
}
