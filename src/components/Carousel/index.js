import React, {useState} from 'react'

import Controls from './Controls'
import Viewport from './Viewport'
import useWindowWidth from '../hooks/useWindowWidth'

import { Carousel } from './styled'

export default props => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [width, setWindowWidth] = useWindowWidth()

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
		return React.Children.map(props.children, (child, i) => {
			console.log('index', i)
			return  (
				React.cloneElement(child, {
				...child.props,
				active: i === activeIndex,
				activeIndex
			}))
		})
	}

	return (
		<React.Fragment>
			<Controls onPrevClick={scrollLeft} onNextClick={scrollRight} />
			<Carousel>
				<Viewport activeIndex={activeIndex} offset={(width) * -activeIndex}>
					{renderChildren()}
				</Viewport>
			</Carousel>
		</React.Fragment>
	)
}