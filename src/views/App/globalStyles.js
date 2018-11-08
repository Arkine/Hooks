import {createGlobalStyle} from 'styled-components'
import styledNormalize from 'styled-normalize'

export default createGlobalStyle`
	${styledNormalize};

	html {
		font-size: 16px;
	}
	html, body, #root {
		height: 100%
		font-family: Roboto, sans-serrif;
	}

	body {

	}

	a {
		color ${props => props.theme.colors.blue}
	}

	p {
		line-height: 1.6;
	}
`