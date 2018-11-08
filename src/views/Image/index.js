import React, {useState} from 'react'

import Loading from '../../components/Loading'

import {Image} from './styled'

export default props => {
	const [loaded, setLoadedState] = useState(false)

	function setLoaded() {
		setLoadedState(true)
	}

	return (
		<React.Fragment>
			{(!props.image || !loaded) && <Loading />}
			<Image src={props.image} onLoad={setLoaded} loaded={loaded} />
		</React.Fragment>
	)
}