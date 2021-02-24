import React from 'react'
import { Post, PostBody } from './../components/post'
import Cover from './../components/cover'
import Summary from '../components/summary'
import Footer from './../components/footer'
import Next from './../components/next'

function Laneige2019() {
  const specs = [
    { tit: '클라이언트', cont: '한화 갤러리아' },
    { tit: '기술', cont: 'webpack gulp es6 rxjs pjax' },
    { tit: '언어', cont: 'Ko En Zh Ja' },
    { tit: '프로젝트 보기', cont: 'https://www.hanwhagalleria.co.kr' },
  ]

  return (
    <>
      <Post>
        <Cover title="Hanwha Galleria" imgSrc="/image/galleria-2019/main.png" videoSrc="/video/galleria-2019/main.mp4" />

        <PostBody>
          <Summary slogan="No.1 Premium Contents Producer" specs={specs}>
            <h2>프리미엄 백화점 브랜드</h2>
            <p>
              한화 갤러리아 프로젝트는 3개의 사이트로 구성되어 있는데 회사 소개인 한화 갤러리아와 타임월드 그리고 백화점 사이트입니다.<br />
              이 중 한화 갤러리아와 타임월드는 PL로서 역할을 담당했는데 이것저것 넣어 보고 싶었던 기술들을 잔뜩 시험해 본 기억이 납니다.
            </p>
            <p>
              하지만 방대한 백화점 사이트에 묻혀 조용히 오픈 되었습니다.. 백화점 사이트에 달라붙어 페이지를 쳐 내던 기억도 나는군요.
            </p>
          </Summary>

          <figure data-size="lg">
            <video src="/video/laneige-2019/main.mp4" poster="/image/laneige-2019/main.png" autoPlay muted loop playsInline></video>
          </figure>

          <h3 className="center">Rxjs & Pjax</h3>
          <p>
            인터랙션을 강화하기 위한 방법으로 비동기 라이브러리인 Rxjs와 페이지 전환을 위한 Pjax가 사용되었습니다.<br />
            Rxjs를 통해 스크롤을 내릴 때 위치 값을 쌓아두고 보간하여 스크롤에 따라 부드럽게 따라오는 선을 만들 수 있었습니다. Pjax는 관련 라이브러리인 Barba.js 를 사용하여 페이지간 이동이 연결되도록 만들었습니다.
          </p>

          <figure data-size="lg">
            <img src="/image/galleria-2019/shot-01.png" alt=""/>
          </figure>

          <figure data-size="lg">
            <video src="/video/laneige-2019/brand-story.mp4" poster="/image/laneige-2019/brand-story.png" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
            <img src="/image/galleria-2019/dept-main.png" alt=""/>
          </figure>

          <h3>백화점</h3>

          <p>
            백화점에는 페이지 작업자로 참여했는데 가로 스크롤의 레이아웃을 작성하는 것이 까다로웠습니다. 다수의 flex를 중첩으로 사용하여 가로 레이아웃을 구현하고 모바일에선 세로 레이아웃이었기 때문에 스크립트 초기화에 매우 신경썼습니다.
          </p>

          <figure data-size="lg">
            <img src="/image/galleria-2019/dept-01.png" alt=""/>
          </figure>

          <figure data-size="lg">
            <img src="/image/galleria-2019/dept-02.png" alt=""/>
          </figure>

          <Footer />

          <Next pageId="vyvydstudio-2018">
            <Cover imgSrc="/image/vyvydstudio-2018/cover.png" videoSrc="/video/vyvydstudio-2018/cover.mp4" title="VYVYD STUDIO" />
          </Next>

        </PostBody>
      </Post>
    </>
  )
}

export default Laneige2019