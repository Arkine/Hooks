import React, {useState} from 'react'
import { Carousel } from './styled'

import Controls from './Controls'
import Viewport from './Viewport'

export default props => {
	const [activeIndex, setActiveIndex] = useState(0)

	function scrollRight() {
		let next = activeIndex + 1;
		if (next > props.children.length - 1) {
			next = 0
		}
		setActiveIndex(next)
	}

	function scrollLeft() {
		let next = activeIndex - 1
		if (next < 0) {
			next = props.children.length - 1
		}
		setActiveIndex(next)
	}

	function renderChildren() {
		return React.Children.map(props.children, (child, i) => (
			React.cloneElement(child, {
				...child.props,
				active: i === activeIndex,
				activeIndex
			})
		))
	}


	return (
		<React.Fragment>
			<Controls onPrevClick={scrollLeft} onNextClick={scrollRight} />
			<Carousel>
				<Viewport activeIndex={activeIndex} offset={(1900) * -activeIndex}>
					{renderChildren()}
				</Viewport>
			</Carousel>
		</React.Fragment>
	)
}