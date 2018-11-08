import React from 'react'
import {Info} from './styled'

export default props => {
	console.log({props})
	return (
		<Info>
			<Info.Header>
				<Info.Title>{props.info.title}</Info.Title>
				<Info.Date>Date: {props.info.date}</Info.Date>
				<Info.Description>{props.info.explanation}</Info.Description>
			</Info.Header>
		</Info>
	)
}