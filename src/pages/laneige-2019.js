import React from 'react'
import { Post, PostBody } from './../components/post'
import Cover from './../components/cover'
import Summary from '../components/summary'
import Footer from './../components/footer'
import Next from './../components/next'

function Laneige2019() {
  const specs = [
    { tit: '클라이언트', cont: '아모레퍼시픽' },
    { tit: '기술', cont: 'webpack gulp es6' },
    { tit: '언어', cont: 'Ko En Zh' },
    { tit: '프로젝트 보기', cont: 'https://www.laneige.com' },
  ]

  return (
    <>
      <Post>
        <Cover title="라네즈" imgSrc="/image/laneige-2019/cover-lg.png" />

        <PostBody>
          <Summary slogan="Luminous Beauty" specs={specs}>
            <h2>글로벌 코스메틱 브랜드</h2>
            <p>
              
            </p>
            <p>
            
          </p>
          </Summary>
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