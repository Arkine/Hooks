import React, {useState, useEffect} from 'react'
import { Carousel } from './styled';

export default props => {
	return (
		<Carousel.Viewport offset={props.offset} >
			{props.children}
		</Carousel.Viewport>
	)
}