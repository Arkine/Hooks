import styled from 'styled-components'

export const Image = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;

	height: 100%;
	width: 100%;

	flex-basis: 30rem;
	transition: .5s all ease;
	transform: rotateX(60deg) scale(0.7);

	box-shadow: 0px 20px 50px #555;
	border: 1px solid blue;
`

Image.Img = styled.img`
	height: 100%;
	width: 100%;
	opacity: ${props => props.loaded ? 1 : 0};
	transition: opacity 1s ease;
	visibility: ${props => props.loaded ? 'visible': 'hidden'};
`
Image.Error = styled.div``