import React, {useEffect, useState} from 'react'

export default importComponent => props => {
	const [component, setComponent] = useState({})

	useEffect( async () => {
		const {default: component} = await importComponent()
		console.log(component)
		setComponent(component)
	})

	const C = component;

	return C ? <C {...props} /> : props.fallback
}