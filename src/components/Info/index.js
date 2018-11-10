import React, {useEffect} from 'react'
import {Transition} from 'react-transition-group'
import { TimelineMax } from 'gsap';

import {fadeFromTop} from '../../services/animations'

import {Info} from './styled'

export default props => {
	return (
		<Transition
          unmountOnExit
		  in={props.loaded}
		  {...fadeFromTop({mounted: props.loaded, duration: 1.25})}
        >
			<Info>
				<Info.Header>
					<Info.Title>{props.info.title}</Info.Title>
					<Info.Date>Date: {props.info.date}</Info.Date>
				</Info.Header>
				<Info.Body>
					<Info.Description>{props.info.explanation}</Info.Description>
				</Info.Body>
			</Info>
        </Transition>
	)
}