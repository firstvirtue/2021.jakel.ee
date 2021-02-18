import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as palette from '../variables'

function Next(props) {

  const history = useHistory()
  const handleOnClick = useCallback((e) => {

    window.view = 1
    // [FIXME] data-id를 이용해 같지만 다른 형태로 구현할 것. 지금은 window.preview에 목록의 아이템이 들어간다.
    window.preview = document.querySelector(`.next-preview[data-id="${props.pageId}"]`)

    console.log(window.preview)
    const post = document.querySelector('.post')
    post.style.top = -window.pageYOffset + 'px'
    post.style.position = 'fixed'
    post.style.width = '100%'

    history.replace(`/${props.pageId}`)
    e.preventDefault()
    e.stopPropagation()
  })

  return(
    <>
      <div className="preview next-preview" data-id={props.pageId} onClick={handleOnClick.bind(this)}>
        {props.children}
      </div>
    </>
  )
}

export default Next