import React, {useState, useEffect} from 'react'

import Fetcher from '../../api/Nasa/Fetcher'
import Loading from '../../components/Loading/ShimmeringText'
import Info from '../../components/Info'
import useWindowWidth from '../../components/hooks/useWindowWidth'

import {Image, Video} from './styled'

export default props => {
	const [loaded, setLoaded] = useState(false)
	const [image, setImage] = useState(null)
	const [error, setError] = useState(null)
	const [viewImage, setImageView] = useState(false)
	const [width, setWindowWidth] = useWindowWidth()

	function renderError() {
		setLoaded(true)
		return <Image.Error>There was an error: {error || image.error.message}</Image.Error>
	}

	function handleImageLoad() {
		setLoaded(true)
	}
	
	function renderInfo() {
		if (!image) {
			return null
		}

		if (error || image.error) {
			return renderError()
		}

		return <Info info={image} loaded={loaded} />
	}

	function renderImage() {
		if (!image || error || image.error) {
			return null;
		}
		
		if (image.media_type === 'video') {
			return (
				<Video.Container>
					<Video 
						src={image.url}
						onLoad={handleImageLoad}
						controls
					/>
				</Video.Container>
			)
		} 

		return <Image.Img 
			src={image.url}
			onLoad={() => setLoaded(true)}
			onError={e => setError('Image failed to load')}
			loaded={loaded} 
		/>
	}

	useEffect(async () => {
		if (props.active && !loaded) {
			try {
				const image = await Fetcher.getByDate(props.date);
				setImage(image)
			} catch(e) {
				setError(e || 'Could not load images...')
				setLoaded(true)
			}
		}
	}, [props.active, error, image])

	return (
		<Image.Container width={width}>
			{renderInfo()}
			<Image {...props} onClick={() => setImageView(!viewImage)} view={viewImage} loaded={loaded} active={props.active}>
				{renderImage()}
			</Image>
			<Loading isLoading={!loaded} />
		</Image.Container>
	)
}