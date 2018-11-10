import React, {useEffect} from 'react'
import {TimelineMax} from 'gsap'

import {Loading, Letter} from './styled'

export default props => {
	const letters = []
	const tl = new TimelineMax({repeat: -1})

	function renderLoadingContent() {
		const word = 'LOADING...';

		return word.split('').map((letter, i) => <Letter key={`letter-${i}`} ref={el => letters.push(el)}>{letter}</Letter>)
	}

	useEffect(() => {
		tl
			.staggerTo(letters, 0.75, { autoAlpha: 1 }, 0.1)
			.staggerTo(letters, 0.75, { autoAlpha: 0 }, 0.1)
	})

	return (
		<Loading isLoading={props.isLoading}>
			{renderLoadingContent()}
		</Loading>
	)
}