import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navigation = styled.nav`
	display: flex;
	flex-direction: row;
`

Navigation.NavItem = styled(NavLink)`
	color: ${props => props.active ? props.theme.colors.red : props.theme.colors.blue};
	padding: 1rem;
	text-transform: uppercase;
`