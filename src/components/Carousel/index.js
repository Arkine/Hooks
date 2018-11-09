import React, {useState} from 'react'
import { Carousel } from './styled'

import Controls from './Controls'
import Viewport from './Viewport'

export default props => {
	const [activeIndex, setActiveIndex] = useState(0)

	function scrollLeft() {
		setActiveIndex(activeIndex + 1)
	}

	function scrollRight() {
		setActiveIndex(activeIndex - 1)
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
		<Carousel>
			<Controls onPrevClick={scrollLeft} onNextClick={scrollRight} />
			<Viewport activeIndex={activeIndex} offset={(1830) * activeIndex}>
				{renderChildren()}
			</Viewport>
		</Carousel>
	)
}