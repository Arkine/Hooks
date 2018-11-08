import React, {useState, useEffect} from 'react'
import {Transition} from 'react-transition-group'
import {fadeFromTop} from '../../services/animations'

import {Info} from './styled'

export default props => {
	return (
		<Transition
          unmountOnExit
		  in={props.loaded}
		  {...fadeFromTop({mounted: props.loaded})}
        >
			<Info>
				<Info.Header>
					<Info.Title>{props.info.title}</Info.Title>
					<Info.Date>Date: {props.info.date}</Info.Date>
					<Info.Description>{props.info.explanation}</Info.Description>
				</Info.Header>
			</Info>
        </Transition>
	)
}