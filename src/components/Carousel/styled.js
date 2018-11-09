import styled from 'styled-components'

export const Carousel = styled.div`
	position: absolute;

	display: flex;
	flex-flow: row nowrap;
	align-content: center;
	justify-content: center;

	height: 100%;
	width: 100%;

	border: 1px solid red;
`

Carousel.Viewport = styled.div`

	height: 100%;
	width: auto;

	flex-grow: 1;

	transform: translateX(${props => props.offset}px);
	transition: all 0.5s ease-in-out;
	perspective: 900px;
`

Carousel.Controls = styled.div`
	position: absolute;
`