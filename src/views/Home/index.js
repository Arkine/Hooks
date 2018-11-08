import React, {useEffect, useState} from 'react'

import ImageView from '../Image'
import Sidebar from '../../components/Sidebar'

import InfoView from '../Info'

import Fetcher from '../../api/Nasa/Fetcher'

import {Home} from './styled'

export default () => {
	const [image, setImage] = useState(null)
	const [error, setError] = useState(null)

	useEffect(async () => {
		try {
			const image = await Fetcher.get();

			// setImage(image)
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
						<Sidebar>
							<InfoView info={{
								copyright: "Tunc Tezel",
								date: "2018-11-08",
								explanation: "This composite of images spaced some 5 to 9 days apart, from late April (bottom right) through November 5 (top left), traces the retrograde motion of ruddy-colored Mars through planet Earth's night sky. To connect the dots and dates in this 2018 Mars retrograde loop, just slide your cursor over the picture (and check out this animation). But Mars didn't actually reverse the direction of its orbit. Instead, the apparent backwards motion with respect to the background stars is a reflection of the motion of the Earth itself. Retrograde motion can be seen each time Earth overtakes and laps planets orbiting farther from the Sun, the Earth moving more rapidly through its own relatively close-in orbit. On July 27, Mars was near its favorable 2018 parihelic opposition, when Mars was closest to the Sun in its orbit while also opposite the Sun in Earth's sky. For that date, the frame used in this composite was taken during the total lunar eclipse.",
								hdurl: "https://apod.nasa.gov/apod/image/1811/Ma2018_tezelN.jpg",
								media_type: "image",
								service_version: "v1",
								title: "Mars in the Loop",
								url: "https://apod.nasa.gov/apod/image/1811/Ma2018_tezelN1024.jpg"
							}} />
						</Sidebar>
					</React.Fragment>
				}
			</Home.Content>
		</Home>
	)
}