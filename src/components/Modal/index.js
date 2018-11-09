import React from 'react'

import { Modal } from './styled'

export default props => {
	return <Modal {...props}>{props.children}</Modal>
}