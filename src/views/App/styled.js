import styled from 'styled-components'

export const App = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 100%;
`

App.Body = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	flex-grow: 1;
	max-width: ${props => props.theme.rowWidth};
	width: 100%;
`

App.Content = styled.div`
	display: flex;
	flex-direction: column;

	flex-grow: 1;
`