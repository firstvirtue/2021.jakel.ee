import React from 'react'
import Cover from './../components/cover'
import Footer from './../components/footer'

function VyvydStudio2018(props) {
  return (
    <>
      <div className="post">
        <Cover title={props.title} videoSrc="/video/vyvydstudio/cover.mp4" imgSrc="/image/vyvydstudio/cover.png" />

        <Footer />
      </div>
    </>
  )
}

export default VyvydStudio2018