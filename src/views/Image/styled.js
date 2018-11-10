import styled from 'styled-components'

export const Image = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;

	height: 100%;
	width: 100%;

	min-height: 100vh;

	flex-basis: 30rem;
	flex-grow: 1;
	transition: 1s all ease;
	transform: rotateX(${props => props.view ? 0 : '60deg'}) scale(${props => props.view ? 1 : '0.7'}) translateY(${props => props.view ? 0 : !props.active ? '200%' : '50%' });
	box-shadow: 0px 20px ${props => props.loaded ? '50px': 0 } #555;

	&:hover {
		cursor: pointer;
	}
`

Image.Container = styled.div`
	position: relative;
	display: flex;

	width: ${props => props.width ? `${props.width}px` : '100%'};
	perspective: 900px;
`

Image.Img = styled.img`
	height: 100%;
	width: 100%;
	opacity: ${props => props.loaded ? 1 : 0};
	transition: opacity 1s ease;
	visibility: ${props => props.loaded ? 'visible': 'hidden'};
`
Image.Error = styled.div``