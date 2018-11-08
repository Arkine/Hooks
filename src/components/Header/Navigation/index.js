import React from 'react'

import NavItem from './NavItem';
import data from './data';

export default function(){
	return data.navItems.map((navItem, i) => <NavItem key={`navItem-${i}`} label={navItem.label} to={navItem.slug} />)
}