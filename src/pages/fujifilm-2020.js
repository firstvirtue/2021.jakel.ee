import React from 'react'
import Footer from './../components/footer'
import Cover from './../components/cover'
import Next from './../components/next'

function Fujifilm2020() {
  return (
    <>
      <div className="post">
        <Cover title="후지필름" imgSrc="/image/fujifilm/cover-lg.jpg" />
        
        <Footer />

        <Next pageId="laneige-2019">
          <Cover imgSrc="/image/laneige/cover-lg.png" title="라네즈" />
        </Next>
      </div>
    </>
  )
}

export default Fujifilm2020