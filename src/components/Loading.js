import React from 'react'
import styled from 'styled-components'

const Loading = styled.div`
	position: fixed;
	height: 100vh;
	width: 100vw;

	background-color: blue;
`

export default () => {
	return (
		<Loading />
	)
}