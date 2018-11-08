import styled from 'styled-components'

export const App = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

App.Body = styled.div`
	flex-grow: 1;
	max-width: ${props => props.theme.rowWidth};
	width: 100%;
`