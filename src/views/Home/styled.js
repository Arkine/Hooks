import styled from 'styled-components'
import Button from '../../components/Button'

export const Home = styled.div`
	display: flex;

	position: relative;
	overflow: hidden;

	height: 100%;
	width: 100%;
	flex-grow: 1;
`

Home.Content = styled.div`
	flex-grow: 1;
`

Home.Button = styled(Button)`
	position: absolute;
	top: 1rem;
	left: 1rem;
	z-index: 20;

	border: 1px solid #fff;
	border-radius: 4px;

	&:hover {
		cursor: pointer;
	}
`

Home.Images = styled.div`
	height: 100%;
`
