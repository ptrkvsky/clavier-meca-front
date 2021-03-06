import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'

import {useGlobalStateContext} from '../../context/globalContext'

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 400,
        y: 400,
    })

    const { cursorType } = useGlobalStateContext();

    const onMouseMove = event => {
        const {pageX: x, pageY: y} =event;
        setMousePosition({x,y})
    }

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove)
        return () => {
            document.removeEventListener("mousemove", onMouseMove)
        }
    }, [])

    return (
        <>
            <Cursor className={`${cursorType === 'hovered' ? "hovered" : ""}`}  style={{left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}} />
        </>
    )
}

export default CustomCursor

const Cursor = styled("div")`
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.1s ease-in-out;
    transition-property: width, height, border; 
    will-change: width, height, border; 
    pointer-events: none;
    
    mix-blend-mode:difference;
    pointer-events: none;
    &.hovered {
        background: transparent;
        width: 56px;
        height: 56px;
        border: 4px solid ${props => props.theme.colors.primary} !important;
    }

    &.pointer {
        border: 4px solid ${props => props.theme.colors.primary} !important;
    }


`
