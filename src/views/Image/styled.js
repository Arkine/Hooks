import styled from 'styled-components'

export const Image = styled.div`
	position: absolute;
	top: 0%;
	width: 100%;
	height: 100%;
	transition: .5s all ease;
	transform: rotateX(60deg) scale(0.7);
	perspective: 900px;
	box-shadow: 0px 20px 50px #555;
`

Image.Img = styled.img`
	width: 100%;
	height: auto;
	
	opacity: ${props => props.loaded ? 1 : 0};
	transition: opacity 1s ease;
	visibility: ${props => props.loaded ? 'visible': 'hidden'};
`
