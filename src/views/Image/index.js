import React, {useState, useEffect} from 'react'

import Fetcher from '../../api/Nasa/Fetcher'
import Loading from '../../components/Loading/BouncingText'
import Info from '../../components/Info'

import {Image} from './styled'

export default props => {
	const [loaded, setLoaded] = useState(false)
	const [image, setImage] = useState(null)
	const [error, setError] = useState(null)

	function renderError() {
		return <Image.Error>{error}</Image.Error>
	}

	function renderImage() {
		if (!image) {
			return
		}

		if (error) {
			return renderError()
		}

		return (
			<React.Fragment>
				<Info info={image} />
				<Image.Img src={props.image} onLoad={setLoaded} onError={setError} loaded={loaded} />
			</React.Fragment>
		)
	}

	useEffect(async () => {
		if (props.active) {
			try {
				const image = await Fetcher.getByDate(props.date);

				setImage(image)
			} catch(e) {
				setError(e.message)
				setLoaded(true)
			}
		}
	}, [])

	return (
		<Image {...props}>
			{renderImage()}
			<Loading isLoading={!loaded} />
		</Image>
	)
}