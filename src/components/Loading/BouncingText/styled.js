import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
    from {opacity: 0};
    to {opacity: 1}
`
const fadeOut = keyframes`
    from {opacity: 1};
    to {opacity: 0}
`

export const Loading = styled.div`
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
	visibility: ${props => props.isLoading ? 'visible' : 'hidden'};
	transform: visibility 0.5s  ease-in-out;
    animation: ${props => props.isLoading ? fadeIn : fadeOut} 0.5s ease-in-out;
`

export const Letter = styled.span`
	font-size: 3rem;
	opacity: 0;
	color: #fff;
	letter-spacing: 1rem;
`