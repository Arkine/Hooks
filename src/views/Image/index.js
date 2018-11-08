import React, {useState} from 'react'

import Loading from '../../components/Loading'

import {Image} from './styled'

export default props => {
	const [loaded, setLoadedState] = useState(false)

	function setLoaded() {
		setLoadedState(true)

		props.onImageLoaded()
	}

	return (
		<Image>
			<Image.Img src={props.image} onLoad={setLoaded} loaded={loaded} />
			{(!props.image || !loaded) && <Loading />}
		</Image>
	)
}