import styled from 'styled-components'

export const Image = styled.div`
	position: relative;
	flex-grow: 1;

	display: flex;
	flex-direction: column;
	justify-content: center;


	background-color: ${props => props.theme.colors.charcoal};
`

Image.Img = styled.img`
	width: 100%;
	height: auto;
	opacity: ${props => props.loaded ? 1 : 0};
	transition: opacity 1s ease;
	visibility: ${props => props.loaded ? 'visible': 'hidden'};
`
