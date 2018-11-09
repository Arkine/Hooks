import React from 'react'

import {Carousel} from './styled'

export default props => {
	return (
		<Carousel.Controls>
			<Carousel.Control_Left onClick={props.onPrevClick}>Prev</Carousel.Control_Left>
			<Carousel.Control_Right onClick={props.onNextClick}>Next</Carousel.Control_Right>
		</Carousel.Controls>
	)
}