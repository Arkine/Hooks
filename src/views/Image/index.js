import React, {useState, useEffect} from 'react'

import Fetcher from '../../api/Nasa/Fetcher'
import Loading from '../../components/Loading/BouncingText'
import Info from '../../components/Info'

import {Image} from './styled'

export default props => {
	const [loaded, setLoaded] = useState(false)
	const [image, setImage] = useState(null)
	const [error, setError] = useState(null)
	const [viewImage, setImageView] = useState(false)

	console.log({active: props.active})

	function renderError() {
		return <Image.Error>{error}</Image.Error>
	}

	function renderImage() {
		console.log('GOT IMAGE', image)
		if (!image) {
			return
		}

		if (error) {
			return renderError()
		}

		return <Image.Img src={image.url} onLoad={() => setLoaded(true)} onError={setError} loaded={loaded} />
	}

	useEffect(async () => {
		if (props.active && !loaded) {
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
		<React.Fragment>
			{image && <Info info={image} loaded={loaded} />}
			<Image {...props} onClick={() => setImageView(!viewImage)} view={viewImage} loaded={loaded} active={props.active}>
				{renderImage()}
				<Loading isLoading={!loaded} />
			</Image>
		</React.Fragment>
	)
}