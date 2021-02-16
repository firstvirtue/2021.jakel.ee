import styled, { css } from 'styled-components'
import * as palette from '../variables'

const Ci = styled.h1`
  margin-left: 5%;
  font-size: 20px;
  font-family: ${palette.FONT_EN}
`

const Figure = styled.figure`
  margin: 0 5%;
  font-size: 22px;

  figcaption {
    margin-top: 1em;
    font-size: 60%;
  }
`

const Blockquote = styled.blockquote`
  color: #686868;
`

function Intro() {
  return (
    <>
      <Ci className="ci">Jake Lee</Ci>
      <Figure>
        <Blockquote>
          난 내 예술로 사람들을 어루만지고 싶다.<br /> 
          그들이 이렇게 말하길 바란다. <br />
          그는 마음이 깊은 사람이구나, 마음이 따뜻한 사람이구나.
          <figcaption>— 빈센트 반 고흐, <cite>러빙 빈센트</cite></figcaption>
        </Blockquote>
      </Figure>
    </>
  )
}

export default Intro