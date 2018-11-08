import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavItem = styled(NavLink)``

export default function(props) {
	return (
		<NavItem to={props.to}>{props.label}</NavItem>
	)
}