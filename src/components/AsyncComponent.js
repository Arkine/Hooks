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
			console.log(this.props)
			const C = this.state.component
			const L = fallback ? fallback : null

			return C ? <C {...this.props} /> : L
		}
	}
)