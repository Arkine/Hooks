import React from 'react'

import {Carousel} from './styled'

export default props => {
	return (
		<Carousel.Controls>
			<button onClick={props.onPrevClick}>Prev</button>
			<button onClick={props.onNextClick}>Next</button>
		</Carousel.Controls>
	)
}