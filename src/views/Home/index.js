import React, {useEffect, useState} from 'react'

import ImageView from '../Image'
import Sidebar from '../../components/Sidebar'

import Fetcher from '../../api/Nasa/Fetcher'

import {Home} from './styled'

export default () => {
	const [image, setImage] = useState(null)
	const [error, setError] = useState(null)

	useEffect(async () => {
		try {
			const image = await Fetcher.get();

			setImage(image)
		} catch(e) {
			// setError(e.message)
		}
	}, [image, error])

	return (
		<Home>
			<Home.Content>
				{error && <span>{error}</span>}
				{!error &&
					<React.Fragment>
						<ImageView image={'https://apod.nasa.gov/apod/image/1811/Ma2018La_tezelN1024.jpg'} />
						<Sidebar>Sidebar</Sidebar>
					</React.Fragment>
				}
			</Home.Content>
		</Home>
	)
}