import React from 'react'

import ImageView from '../Image'

import {Home} from './styled'
import Carousel from '../../components/Carousel';

export default () => {
	const dates = [
		'2018-11-06',
		'2018-11-05',
		'2018-11-04',
		'2018-11-03',
		'2018-11-02'
	]

	return (
		<Home>
			<Home.Content>
				<Home.Images>
					<Carousel>
						{dates.map((date, i) => <ImageView key={`image-view-${i}`} date={date} />)}
					</Carousel>
				</Home.Images>
			</Home.Content>
		</Home>
	)
}