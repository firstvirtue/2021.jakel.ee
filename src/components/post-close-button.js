import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

function PostCloseButton() {
  const [shadeColor, setShadeColor] = useState('#000000')
  const closeButton = useRef()

  const Alink = styled.a`
  position: fixed;
  top: 50px;
  right: 60px;
  z-index: 10;
  color: ${shadeColor};
  text-decoration: none;
  border-bottom: 1px solid #E06D72;
  transition: all 200ms;
`

  const history = useHistory()
  const handleOnClick = (e) => {
    history.goBack()
    // history.block('ww?')
    
    e.preventDefault()
    e.stopPropagation()
  }

  useEffect(() => {
    function detectShade() {
      if(!closeButton.current) return
      
      const darks = document.querySelectorAll('*[data-shade="dark"]')
      let color = shadeColor
      darks.forEach(el => {
  
        const elRect = el.getBoundingClientRect()
        const closeRect = closeButton.current.getBoundingClientRect()
  
        if(elRect.top < closeRect.top 
          && elRect.top + elRect.height >= closeRect.top + closeRect.height 
          && elRect.left < closeRect.left
          && elRect.left + elRect.width >= closeRect.left + closeRect.width) {
            color = '#ffffff'
          }
      })

      closeButton.current.style.color = color
  
      requestAnimationFrame(detectShade)
    }
  
    detectShade()
  }, [])

  return (
    <>
      <Alink ref={closeButton} href="/" onClick={handleOnClick.bind(this)}>
        <span>닫기</span>
      </Alink>
    </>
  )
}

export default PostCloseButton