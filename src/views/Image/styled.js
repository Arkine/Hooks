import styled from 'styled-components'

export const Image = styled.img`
	flex-grow: 1;
	min-height: 100%;
	min-width: 100%;

	opacity: ${props => props.loaded ? 1 : 0};
	transition: opacity 1s ease;
`
