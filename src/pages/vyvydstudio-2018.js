import React from 'react'
import { Post, PostBody } from './../components/post'
import Cover from './../components/cover'
import Summary from '../components/summary'
import Footer from './../components/footer'
import Next from './../components/next'

function VyvydStudio2018(props) {
  const specs = [
    { tit: '클라이언트', cont: '비비드웍스' },
    { tit: '기술', cont: 'webpack gulp es6' },
    { tit: '언어', cont: 'Ko' },
    { tit: '프로젝트 보기', cont: 'https://www.vyvydstudio.com' },
  ]

  return (
    <>
      <Post>
        <Cover title={props.title} videoSrc="/video/vyvydstudio-2018/cover.mp4" imgSrc="/image/vyvydstudio-2018/cover.png" />

        <PostBody>
          <Summary slogan="Contemporary Color Creator" specs={specs}>
            <h2>밀레니얼 코스메틱 브랜드</h2>
            <p>
              밀레니얼 세대를 타켓으로 한 코스메틱 브랜드 사이트로 커머스가 포함되어 있습니다. 이롭게에서는 다국어 프로젝트를 제외하고는 처음 참여한 프로젝트였습니다. 커머스 퍼블리싱 역시 처음 경험해 보았는데 form 레이아웃을 작업하는데 생각할 것들이 꽤 많았습니다. 브랜드 인터랙션에 잘 녹아들 수 있도록 구현하는데 많은 공을 들였습니다.
            </p>
            <p>
              브랜드가 아쉽게도 흥하지 못했는지 2021년 기준으로 shop에는 아무런 제품이 있지 않네요. 사이트도 조만간 내려갈지 모르겠습니다ㅠㅠ
            </p>
          </Summary>

          <figure data-size="lg">
            <video src="/video/vyvydstudio-2018/vyvyd-main.mp4" poster="/image/vyvydstudio-2018/vyvyd-main.png" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
            <img src="/image/vyvydstudio-2018/vyvyd-01.png" alt=""/>
          </figure>

          <p className="standalone">
            여담으로 론칭 파티 영상을 보았는데 정말 핫하더라구요. 벌써 3년이 되가는데 말이죠. 인싸들이 가득했는데 브랜드는 흥하지 못하는 것 같아 매우 아쉽네요.
          </p>

          <figure data-size="lg">
            <img src="/image/vyvydstudio-2018/vyvyd-02.png" alt=""/>
          </figure>

          <figure data-size="lg">
            <img src="/image/vyvydstudio-2018/vyvyd-03.png" alt=""/>
          </figure>

          <figure data-size="lg">
            <video src="/video/vyvydstudio-2018/vyvyd-creator.mp4" poster="/image/vyvydstudio-2018/vyvyd-creator.png" autoPlay muted loop playsInline></video>
          </figure>

        </PostBody>

        <Footer />
      </Post>
    </>
  )
}

export default VyvydStudio2018