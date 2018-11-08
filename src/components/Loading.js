import React, {useEffect} from 'react'
import styled from 'styled-components'
import {TimelineMax} from 'gsap'

const Loading = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 999;

	display: flex;
	justify-content: center;
	align-items: center;

	height: 100vh;
	width: 100vw;

	background-color: ${props => props.theme.colors.charcoal};
`

const Letter = styled.span`
	font-size: 3rem;
	opacity: 0;
	color: #fff;
	letter-spacing: 1rem;
`

export default () => {
	const letters = []
	const tl = new TimelineMax()

	function renderLoadingContent() {
		const word = 'LOADING...';

		return word.split('').map((letter, i) => <Letter key={`letter-${i}`} ref={el => letters.push(el)}>{letter}</Letter>)
	}

	useEffect(() => {
		tl.staggerTo(letters, 3, {y: -20, autoAlpha: 1}, 0.1)
	})

	return (
		<Loading>
			{renderLoadingContent()}
		</Loading>
	)
}