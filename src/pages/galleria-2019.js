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
              한화 갤러리아 프로젝트는 한화갤러리아와 타임월드 그리고 백화점 3개의 사이트로 구성되어 있습니다.<br />
              이 중 한화 갤러리아와 타임월드는 PL로서 역할을 담당했는데 이것저것 넣어 보고 싶었던 기술들을 잔뜩 시험해 본 기억이 납니다.
            </p>
          </Summary>

          <figure data-size="lg">
            <video src="/video/galleria-2019/history.mp4" poster="/image/galleria-2019/history.png" autoPlay muted loop playsInline></video>
          </figure>

          <h3 className="center">Rxjs & Pjax</h3>
          <p>
            인터랙션을 강화하기 위한 방법으로 비동기 라이브러리인 Rxjs와 페이지 전환을 위한 Pjax가 사용되었습니다.<br />
            비동기 라이브러리인 Rxjs를 이용해 스크롤을 내릴 때 위치 값을 쌓아두고 보간하여 스크롤에 따라 부드럽게 따라오는 선을 만들 수 있었습니다. Pjax는 관련 라이브러리인 Barba.js 를 사용했는데 페이지간 이동이 부드럽게 연결되도록하여 웹이 아닌 앱처럼 사용성을 강화하고자 했습니다.
          </p>

          <figure data-size="lg">
            <img src="/image/galleria-2019/shot-01.png" alt=""/>
          </figure>

          <figure data-size="lg">
            <video src="/video/galleria-2019/vision.mp4" poster="/image/galleria-2019/vision.png" autoPlay muted loop playsInline></video>
          </figure>

          <p>
            PL을 맡아서인지 담당 디자이너 분과 요렇게 하면 어떨까요 저렇게 하면 어떨까요 하면서 즐겁게 커뮤니케이션하며 작업했던 기억이 납니다. 결과물도 만족스럽게 나온 것 같습니다.
          </p>

          <figure data-size="lg">
            <img src="/image/galleria-2019/dept-main.png" alt=""/>
          </figure>

          <h3>백화점</h3>

          <p>
            백화점 사이트는 정말 방대한 사이트인데 웬만한 웹사이트 5배 정도는 되는 것 같았습니다. 전 페이지 작업자로 참여했고 초기 설계 단계에서 데스크탑 가로 스크롤의 레이아웃 구성을 맡았습니다.<br/>
            데스크탑 브레이크 포인트에서 다수의 flex를 중첩으로 사용하여 가로 레이아웃을 구현했는데 어찌나 까다롭던지요. 레이아웃의 방향이 다르기 때문에 모션도 상이한데 브레이크 포인트가 바뀔 때 스크립트 초기화에 신경써서 작업했습니다.
            <div><a href="https://dept.galleria.co.kr/" target="_blank" rel="noopener noreferrer">https://dept.galleria.co.kr/</a></div>
          </p>

          <figure data-size="lg">
            <video src="/video/galleria-2019/dept-horizon-01.mp4" poster="/image/galleria-2019/dept-horizon-01.png" autoPlay muted loop playsInline></video>
          </figure>

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