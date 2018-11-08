import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navigation = styled.nav``

Navigation.NavItem = styled(NavLink)`
	color: ${props => props.active ? props.theme.colors.red : 'blue'};
`