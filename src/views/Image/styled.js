import styled from 'styled-components'

export const Image = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;

	height: 100%;
	width: 100%;

	flex-basis: 30rem;
	transition: 1s all ease;
	transform: rotateX(${props => props.view ? 0 : '60deg'}) scale(${props => props.view ? 1 : '0.7'}) translateY(${props => props.view ? 0 : !props.active ? '200%' : '50%' });

	box-shadow: 0px 20px ${props => props.loaded ? '50px': 0 } #555;

	&:hover {
		cursor: pointer;
	}
`

Image.Img = styled.img`
	height: 100%;
	width: 100%;
	opacity: ${props => props.loaded ? 1 : 0};
	transition: opacity 1s ease;
	visibility: ${props => props.loaded ? 'visible': 'hidden'};
`
Image.Error = styled.div``