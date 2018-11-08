import {createGlobalStyle} from 'styled-components'
import styledNormalize from 'styled-normalize'

export default createGlobalStyle`
	${styledNormalize};

	html {
		font-size: 16px;
	}
	html, body, #root {
		height: 100%
	}

	body {

	}

	a {
		color ${props => props.theme.colors.blue}
	}
`