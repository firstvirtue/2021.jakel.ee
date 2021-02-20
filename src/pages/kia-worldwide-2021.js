import React, { useCallback } from 'react'
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'
import Footer from './../components/footer'
import { Post, Box } from './../components/post'
import Summary from '../components/summary'
import Cover from './../components/cover'
import Next from './../components/next'

function KiaWorldwide2021() {
  const specs = [
    { tit: '클라이언트', cont: '기아' },
    { tit: '기술', cont: 'webpack gulp canvas' },
    { tit: '언어', cont: 'Ko En' },
    { tit: '프로젝트 보기', cont: 'https://worldwide.kia.com' },
  ]

  return (
    <>
      <Post>
        <Cover title="기아 KIA" imgSrc="/image/kia-worldwide/cover-lg.jpg" />

        <Summary slogan="Movement that inspires" specs={specs}>
          <h3>브랜드 리런칭</h3>
          <p>
            기아자동차는 2021년을 맞이하여 기아로 사명을 바꾸며 CI와 BI의 변경을 비롯하여 브랜드의 대대적인 리런칭을 시작했습니다.<br />
            이를 구체화하는 단계에서 동적으로 콘텐츠를 보여주는 쇼케이스 웹사이트가 요구사항으로 나오게 되었습니다.
          </p>
        </Summary>

        
        <figure data-size="lg">
          <video src="/image/kia-worldwide/count.mp4" autoPlay muted loop playsInline></video>
        </figure>
        
        
        
        <Footer />

        <Next pageId="fujifilm-2020">
          <Cover imgSrc="/image/fujifilm/cover-lg.jpg" title="후지필름" />
        </Next>
      </Post>
    </>
  )
}

export default KiaWorldwide2021