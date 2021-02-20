import styled, { css } from 'styled-components'
import * as palette from '../variables'

const CoverWrap = styled.div`
  position: relative;
  height: 100vh;
  max-height: 700px;
  .img-wrap {
    width: 100%;
    height: 100%;

    img {
      position: absolute;
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
    left: 20px;
    color: #ffffff;
    font-size: 56px;
  }
`

function Cover(props) {
  return (
    <>
    <CoverWrap className="cover">
      <div className="img-wrap">
        <img src={props.imgSrc} alt=""/>
      </div>
      <h2 className="title">{props.title}</h2>
    </CoverWrap>
    </>
  )
}

export default Cover