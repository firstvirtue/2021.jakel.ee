import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as palette from '../variables'

const NextWrap = styled.div`
margin-bottom: 100px;
cursor: pointer;
`

function Next(props) {

  const history = useHistory()
  const handleOnClick = useCallback((e) => {

    // 목록에서 라우팅 되는 것과 구분짓기 위한 변수
    window.view = 1

    // 목록 갱신.
    // [TODO] 현재 페이지 아이템에 대한 스크롤 위치 갱신
    const beforeId = window.preview.getAttribute('data-id');
    const before = document.querySelector(`.preview-nav .preview[data-id="${beforeId}"]`)
    before.style.visibility = 'visible'
    const preview = document.querySelector(`.preview-nav .preview[data-id="${props.pageId}"]`)
    preview.style.visibility = 'hidden'
    
    // preview 업데이트
    window.preview = document.querySelector(`.next-preview[data-id="${props.pageId}"]`)

    // 트랜지션을 위한 post 고정, 목록을 고정한 것과 같은 목적
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
      <NextWrap className="preview next-preview" data-id={props.pageId} onClick={handleOnClick.bind(this)}>
        {props.children}
      </NextWrap>
    </>
  )
}

export default Next