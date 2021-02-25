import React from 'react'
import Footer from './../components/footer'
import Cover from './../components/cover'
import Next from './../components/next'
import Summary from '../components/summary'
import { Post, PostBody } from './../components/post'

function Fujifilm2020() {
  const specs = [
    { tit: '클라이언트', cont: '후지필름' },
    { tit: '기술', cont: 'webpack gulp es6 canvas' },
    { tit: '언어', cont: 'Ko' },
    { tit: '프로젝트 보기', cont: 'https://fujifilm-korea.co.kr' },
  ]

  return (
    <>
      <Post>
        <Cover title="후지필름" imgSrc="/image/fujifilm-2020/cover-lg.jpg" shade="dark"/>

        <PostBody>
          <Summary slogan="Value from Innovation" specs={specs}>
            <h2>브랜드 후지필름</h2>
            <p>
              카메라 브랜드 후지필름의 웹사이트 리뉴얼은 29cm, 라이카와 같은 브랜드 고급화 전략으로 기획/디자인되었습니다. 좋아하는 콘셉트이어서 화면 개발에 즐거웠던 기억이 나는군요.
            </p>
            <p>
              특히 회사 프로젝트에 canvas를 사용해 인터랙션을 처음 적용해 본 개인적으로 의미 있는 프로젝트였습니다.
            </p>
          </Summary>

          <figure data-size="lg">
            <video src="/video/fujifilm-2020/video-01.mp4" autoPlay muted loop playsInline></video>
          </figure>

          <h3 className="center">파티클</h3>

          <p>
            파티클이 <em>떨어지는</em> 모션은 원래 디자인에는 없었는데 파티클이 점점 커지며 화면을 덮는 모션과의 연결성을 극대화하고자 아이디어가 떠올라 넣었습니다. 다행히 반응이 좋아 기획자와 디자이너의 동의를 얻어 페이지에 적용하기로 했습니다. 사실 이때 굉장히 기뻤는데 화면 개발자로서 생각하고 구현한 것이 디자인 요소에 반영되었기 때문이었죠.
          </p>
          <p>
            캔버스를 써 본 것이 처음은 아니지만 실 프로젝트에 적용해 본 것은 처음이라 좀 긴장되더라구요! :)
          </p>

          <figure data-size="lg">
            <video src="/video/fujifilm-2020/video-02.mp4" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
            <img src="/image/fujifilm-2020/shot-01.png" alt=""/>
          </figure>

          <figure data-size="lg">
            <img src="/image/fujifilm-2020/shot-02.png" alt=""/>
          </figure>
        
          <Footer />

          <Next pageId="laneige-2019" shade="light">
            <Cover imgSrc="/image/laneige-2019/cover-lg.png" title="라네즈" />
          </Next>
        </PostBody>
      </Post>
    </>
  )
}

export default Fujifilm2020