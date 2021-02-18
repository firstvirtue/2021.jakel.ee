import React from 'react'
import Footer from './../components/footer'
import Cover from './../components/cover'
import Next from './../components/next'

function Fujifilm2020() {
  return (
    <>
      <div className="post">
        <Cover title="후지필름" imgSrc="/image/fujifilm/cover-lg.jpg" />
        {/* <div className="content">
          <img src="/image/fujifilm-main-01.jpg" alt=""/>
          <p>
            후지필름 프로젝트는 2020년 가장 어려운 프로젝트 중 하나였습니다. 
          </p>
        </div> */}
        {/* <div className="cover">
          <img src="/image/laneige-main-01.png" alt=""/>
        </div> */}
        
        <Footer />

        <Next pageId="laneige-2019">
          <Cover imgSrc="/image/laneige/cover-lg.png" title="라네즈" />
        </Next>
      </div>
    </>
  )
}

export default Fujifilm2020