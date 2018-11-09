import React, {useState} from 'react'

import ImageView from '../Image'

import {Home} from './styled'

export default () => {
	const [modalActive, setModalActive] = useState(false)

	return (
		<Home>
			<Home.Content>
				<Home.Images>
					<ImageView date={'2018-11-07'} />
				</Home.Images>
			</Home.Content>
		</Home>
	)
}