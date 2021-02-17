import styled, { css } from 'styled-components'
import * as palette from '../variables'

const Header = styled.div`
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  max-width: ${palette.MAX_L}
  margin: 0 auto;
`

const Ci = styled.h1`
  // margin-top: 4rem;
  margin: 0;
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
  margin-top: 7rem;
  color: #686868;
  font-weight: bold;
  text-align: center;
  opacity: 0.7;
`

function Intro() {
  return (
    <>
      <Header>
        <Ci className="ci">Jake Lee</Ci>
      </Header>
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