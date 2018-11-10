import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

export const Carousel = styled.div`
	position: relative;

	display: flex;
	flex-flow: row nowrap;
	align-content: center;
	justify-content: center;

	height: 100%;
	width: 100%;
`

Carousel.Viewport = styled.div`
	position: relative;

	height: 100%;
	width: 100%;

	flex-grow: 1;

	transform: translateX(${props => props.offset}px);
	transition: all 0.5s ease-in-out;
`

Carousel.Viewport_Items = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	height: 100%;

	display: flex;
	flex-flow: row nowrap;

`

Carousel.Controls = styled.div`
	z-index: 30;
`

Carousel.Control = styled(FontAwesomeIcon)`
	position: absolute;
	top: 50%;
	z-index: 30;

	&:hover {
		cursor: pointer;
	}
`

Carousel.Control_Left = styled(Carousel.Control).attrs({
	icon: faArrowLeft
})`
	left: 1rem;
`

Carousel.Control_Right = styled(Carousel.Control).attrs({
	icon: faArrowRight
})`
	right: 1rem;
`