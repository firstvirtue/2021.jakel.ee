import styled, { css } from 'styled-components'
import * as palette from '../variables'

function Cover(props) {
  return (
    <>
    <div className="cover">
      <div className="img-wrap">
        <img src={props.imgSrc} alt=""/>
      </div>
      <h2 className="title">{props.title}</h2>
    </div>
    </>
  )
}

export default Cover