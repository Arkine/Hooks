import styled from 'styled-components'

export const Image = styled.img`
	height: 100%;
	flex-grow: 1;

	opacity: ${props => props.loaded ? 1 : 0};
	transition: opacity 1s ease;
`
