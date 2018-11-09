import {createGlobalStyle} from 'styled-components'
import styledNormalize from 'styled-normalize'

export default createGlobalStyle`
	${styledNormalize};

	html {
		font-size: 16px;
		color: #fff;
	}

	html, body, #root {
		height: 100%
		font-family: Roboto, sans-serrif;
	}

	body {
		background-color: black;
		background: linear-gradient(to bottom, #7d7e7d 0%, #0e0e0e 65%);
	}

	a {
		color ${props => props.theme.colors.blue}
	}

	p {
		line-height: 1.8;
	}
`