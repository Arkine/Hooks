import styled from 'styled-components'

export const Modal = styled.div`
	position: absolute;
	top: 0;
	left: ${props => props.isActive ? '0' : '-100%'};

	flex-basis: 44rem;
	padding: 1rem 2rem;
	max-width: 400px;
	height: auto;

	transition: left 0.5s ease-in-out;
	background-color: rgba(255, 255, 255, 0.6);
`