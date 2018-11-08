import React from 'react'

import {Navigation} from './styled'

export default props => {
	function handleClick() {
		props.onClick(props.index)
	}

	return (
		<Navigation.NavItem to={props.to} active={props.active} onClick={handleClick}>{props.label}</Navigation.NavItem>
	)
}