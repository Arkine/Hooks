import styled from 'styled-components'

export const App = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 100%;
	border: 1px solid yellow;
`

App.Body = styled.div`
	flex-grow: 1;
	max-width: ${props => props.theme.rowWidth};
	width: 100%;
	border: 1px solid green;
	flex-grow: 1;
`