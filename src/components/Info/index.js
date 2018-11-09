import React, {useEffect} from 'react'
import {Transition} from 'react-transition-group'
import { TimelineMax } from 'gsap';

import {fadeFromTop} from '../../services/animations'

import {Info} from './styled'

export default props => {
	let header = React.createRef()
	let body = React.createRef()
	const tl = new TimelineMax()

	useEffect(() => {
		tl
			.staggerFromTo(header, 4, {left: -200, autoAlpha: 0}, {left: 0, autoAlpha: 1}, 0.1)
	})
	console.log(props)
	return (
		<Transition
          unmountOnExit
		  in={props.loaded}
		  {...fadeFromTop({mounted: props.loaded})}
        >
			<Info>
				<Info.Header ref={el => header = el}>
					<Info.Title>{props.info.title}</Info.Title>
					<Info.Date>Date: {props.info.date}</Info.Date>
				</Info.Header>
				<Info.Body ref={el => body = el}>
					<Info.Description>{props.info.explanation}</Info.Description>
				</Info.Body>
			</Info>
        </Transition>
	)
}