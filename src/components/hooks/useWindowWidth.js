import React, {useEffect, useState} from 'react'

export default (defaultVal = window.innerWidth) => {
    const [width, setWindowWidth] = useState(defaultVal)

    function handleWindowResize(e) {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)

        handleWindowResize();

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [width])

    return [width, setWindowWidth]
}