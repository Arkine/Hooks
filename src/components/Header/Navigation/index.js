import React, {useState} from 'react'

import NavItem from './NavItem'
import data from './data'

import {Navigation} from './styled'

export default function(){
	const [activeIndex, setActiveIndex] = useState(0)

	function handleNavItemClick(index) {
		setActiveIndex(index)
	}

	console.log(activeIndex)

	return (
		<Navigation>
			{data.navItems.map((navItem, i) => <NavItem key={`navItem-${i}`} active={i === activeIndex} index={i} onClick={handleNavItemClick} label={navItem.label} to={navItem.slug} />)}
		</Navigation>
	)
}