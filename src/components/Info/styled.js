import styled from 'styled-components'

export const Info = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);

	max-width: 70vw;
	max-height: 425px;
	height: 100%;

	overflow: scroll;

	opacity: ${props => props.view ? 0 : 1};

	transition: opacity: 0.75s ease-in-out;
`

Info.Header = styled.div`
	width: 100%;
	text-align: center;
`
Info.Body = styled.div``
Info.Footer = styled.div``

Info.Title = styled.h1`
	color: #fff;
	font-size: 3rem;
`
Info.Description = styled.p``
Info.Date = styled.span``