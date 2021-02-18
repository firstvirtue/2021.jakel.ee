import React from 'react'
import Cover from './../components/cover'
import Footer from './../components/footer'

function Laneige2019() {
  return (
    <>
      <div className="post">
        {/* <div className="cover">
          <div className="img-wrap">
            <img src="/image/laneige/cover-lg.png" alt=""/>
          </div>
        </div> */}

        <Cover title="라네즈" imgSrc="/image/laneige/cover-lg.png" />

        <Footer />
      </div>
    </>
  )
}

export default Laneige2019