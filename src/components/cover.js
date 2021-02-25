import styled, { css } from 'styled-components'
import * as palette from '../variables'

const CoverWrap = styled.div`
  position: relative;
  height: 100vh;
  max-height: 720px;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .img-wrap {
    position: absolute;
    width: 100%;
    height: 100%;

    width: 100vw;
    height: 100vh;
    max-height: 720px;
    max-width: 1920px;

    img,
    video {
      position: absolute;
      position: relative;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title {
    position: absolute;
    top: 30%;
    left: 10%;
    // transform: translateX(-200%);
    color: #ffffff;
    font-size: 56px;
  }

  // .wrapper {
  //   max-width: ${palette.MAX_L};
  //   width: 100%;
  //   margin: 0 auto;
  //   z-index: 1;
  // }
`

function Cover(props) {
  return (
    <>
    <CoverWrap className="cover" data-shade={props.shade ? props.shade : 'light'}>
      {props.videoSrc ? 
      <div className="img-wrap">
        <video className="media" src={props.videoSrc} poster={props.imgSrc} autoPlay muted loop playsInline />
      </div> :
      <div className="img-wrap">
        <img className="media" src={props.imgSrc} alt=""/>
      </div>}

      <div className="wrapper">
        <h2 className="title">{props.title}</h2>
      </div>
    </CoverWrap>
    </>
  )
}

export default Cover