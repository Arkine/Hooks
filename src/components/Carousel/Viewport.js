import React, {useState, useEffect} from 'react'
import { Carousel } from './styled';

export default props => {
	return (
		<Carousel.Viewport offset={props.offset} >
			<Carousel.Viewport_Items>
				{props.children}
			</Carousel.Viewport_Items>
		</Carousel.Viewport>
	)
}