import React, {useState, useEffect} from 'react'
import {Transition} from 'react-transition-group'
import {fadeFromTop} from '../../services/animations'

import {Info} from './styled'

export default props => {
	const [mounted, setMountedState] = useState(false)

	useEffect(() => {
		setMountedState(true)

		return () => setMountedState(false)
	})

	return (
		<Transition
          unmountOnExit
		  in={mounted}
		  {...fadeFromTop({mounted})}
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