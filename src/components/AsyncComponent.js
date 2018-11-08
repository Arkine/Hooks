import React from 'react'

export default ({importComponent, fallback}) => (
	class AsyncComponent extends React.Component {
		constructor(props) {
			super(props)

			this.state = {
				component: null
			}
		}

		async componentDidMount() {
			const {default: component} = await importComponent()

			this.setState({
				component,
			})
		}

		render() {
			const {fallback: Fallback} = this.props
			const C = this.state.component
			const L = Fallback ? <Fallback {...this.props} /> : null

			return C ? <C {...this.props} /> : L
		}
	}
)