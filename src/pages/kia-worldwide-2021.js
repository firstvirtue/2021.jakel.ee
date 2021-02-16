import React from 'react'
import Footer from './../components/footer'
import Intro from './../components/intro'

function KiaWorldwide2021() {
  return (
    <>
      <div className="post">
        <div className="cover">
          <div className="img-wrap">
            <img src="/image/kia-worldwide-main-01.png" alt=""/>
          </div>
        </div>

        <Intro slogan="Movement that inspires" />
      </div>
      <Footer />
    </>
  )
}

export default KiaWorldwide2021