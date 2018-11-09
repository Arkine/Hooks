import React, {useState, useEffect} from 'react'

import Fetcher from '../../api/Nasa/Fetcher'
import Loading from '../../components/Loading/BouncingText'

import {Image} from './styled'

export default props => {
	const [loaded, setLoaded] = useState(false)
	const [image, setImage] = useState(null)
	
	useEffect(async () => {
		try {
			const image = await Fetcher.getByDate(props.date);

			setImage(image)
		} catch(e) {
			// setError(e.message)
		}

		// setLoaded(true)
	}, [image])

	return (
		<Image {...props}>
			<Image.Img src={props.image} onLoad={setLoaded} loaded={loaded} />
			<Loading isLoading={!loaded} />
		</Image>
	)
}