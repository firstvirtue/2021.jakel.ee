import styled, { css } from 'styled-components'
import * as palette from '../variables'

const Wrap = styled.div`
  padding-top: 10rem;
`

const Slogan = styled.div`
  font-size: 42px;
  font-family: ${palette.FONT_EN};
  font-weight: bold;
  color: #1e1e1e;
  text-align: center;
`

function Intro(props) {
  return(
    <>
      <Wrap>
      {props.slogan && (
        <Slogan>
          {props.slogan}
        </Slogan>)}

        
      </Wrap>
    </>
  )
}

export default Intro