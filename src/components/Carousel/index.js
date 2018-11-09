import React, {useState} from 'react'
import { Carousel } from './styled';

export default props => {
	const [activeIndex, setActiveIndex] = useState(0)

	function renderChildren() {
		return React.Children.map(props.children, (child, i) => (
			React.cloneElement(child, ({
				isActive: i === activeIndex,
				onClick: () => setActiveIndex(i),
				activeIndex
			}))
		))
	}

	return (
		<Carousel>
			<Carousel.Viewport>
				{renderChildren()}
			</Carousel.Viewport>
		</Carousel>
	)
}