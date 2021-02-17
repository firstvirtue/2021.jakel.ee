import styled, { css } from 'styled-components'
import * as palette from '../variables'

const Wrap = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
  padding-left: 5%;
  padding-right: 5%;
`

const Slogan = styled.div`
  padding: 0 10px;
  font-size: 36px;
  font-family: ${palette.FONT_EN};
  font-weight: bold;
  color: #1e1e1e;
  text-align: center;
`

const Container = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
  }
`

const SpecList = styled.ul`

`

const Spec = styled.li`
  margin-top: 2rem;
  font-family: ${palette.FONT_EN};

  @media only screen and (min-width: 768px) {
    max-width: 240px;
  }

  .tit {
    display: block;
    font-weight: normal;
    font-size: 12px;
    color: #1e1e1e;
  }

  .cont {
    font-size: 12px;
    color: #686868;
  }
`

const Desc = styled.div`
  @media only screen and (min-width: 768px) {
    min-width: 500px;
    max-width: 600px;
    margin-left: 4rem;
  }
`

function Intro(props) {
  return(
    <>
      <Wrap>
      {props.slogan && (
        <Slogan>
          {props.slogan}
        </Slogan>)}

        <Container>
          <Desc>
            {props.children}
          </Desc>
          <SpecList>
            {props.specs && props.specs.map(item => {
              return(
              <Spec>
                <strong className="tit">{item.tit}</strong>
                {item.cont.indexOf('https://') > -1 ? 
                <a className="cont cont--link" href={item.cont} target="_blank" rel="noopener noreferrer">{item.cont}</a> :
                <span className="cont">{item.cont}</span>}
              </Spec>
              )
            })}
          </SpecList>
        </Container>
      </Wrap>
    </>
  )
}

export default Intro