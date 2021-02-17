import React, { useCallback } from 'react'
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'
import Footer from './../components/footer'
import Intro from './../components/intro'
import Cover from './../components/cover'

function KiaWorldwide2021() {
  const specs = [
    { tit: '클라이언트', cont: '기아' },
    { tit: '기술', cont: 'webpack gulp canvas' },
    { tit: '언어', cont: 'Ko En' },
    { tit: '프로젝트 보기', cont: 'https://worldwide.kia.com' },
  ]

  const history = useHistory()
  const handleOnClick = useCallback((e) => {

    window.view = 1
    // [FIXME] data-id를 이용해 같지만 다른 형태로 구현할 것. 지금은 window.preview에 목록의 아이템이 들어간다.
    window.preview = document.querySelector(`.preview[data-id="fujifilm-2020"]`)
    const post = document.querySelector('.post')
    post.style.top = -window.pageYOffset + 'px'
    post.style.position = 'fixed'

    history.replace('/fujifilm-2020')
    e.preventDefault()
    e.stopPropagation()
  });

  return (
    <>
      <div className="post">
        {/* <div className="cover">
          <div className="img-wrap">
            <img src="/image/kia-worldwide-main-01.png" alt=""/>
          </div>
          <h1 className="title">기아 브랜드 쇼케이스</h1>
        </div> */}

        <Cover title="기아 브랜드 쇼케이스" imgSrc="/image/kia-worldwide/cover-lg.jpg" />

        <Intro slogan="Movement that inspires" specs={specs}>
          <h3>브랜드 리런칭</h3>
          <p>
            기아자동차는 2021년을 맞이하여 기아로 사명을 바꾸며 CI와 BI의 변경을 비롯하여 브랜드의 대대적인 리런칭을 시작했습니다.<br />
            이를 구체화하는 단계에서 동적으로 콘텐츠를 보여주는 쇼케이스 웹사이트가 요구사항으로 나오게 되었습니다.
          </p>
        </Intro>

        <img src="/image/kia-worldwide-main-01.png" alt=""/>

        <Footer />

        <div className="preview" data-id="fujifilm-2020" onClick={handleOnClick.bind(this)}>
          <Cover imgSrc="/image/fujifilm/cover-lg.jpg" title="후지필름" />
        </div>
      </div>
    </>
  )
}

export default KiaWorldwide2021