import React from 'react'
import styled, { css } from 'styled-components'
import * as palette from '../variables'

const FooterWrap = styled.div`
  width: 100%;
  background: #ffffff;
  padding-left: 5%;
  padding-right: 5%;
  font-family: ${palette.FONT_EN};
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    padding-right: 0;
  }
`

const Footer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 4rem;
  border-top: 1px solid #dcdbd9;
`

const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const LI = styled.li`
  display: inline-block;
  color: #686868;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
  font-size: 14px;
  width: 100%;

  &.head {
    width: 100%;

    .tit {
      color: black;
    }
  }

  .tit {
    display: block;
    font-weight: normal;
    margin-bottom: 4px;
  }

  p {
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
    width: 33.3333%;
  }
`

const Link = styled.a`
  color: #1e1e1e;
  text-decoration: none;
  transition: color 400ms;
  &:hover {
    color: #fe5733;
  }

  & + & {
    margin-left: 10px;
  }
`

const Copyright = styled.div`
  font-size: 11px;
  color: #686868;
  text-align: center;
`

function footer() {

  return (
    <>
      <FooterWrap>
        <Footer className="footer">
          <UL className="footer-items">
            <LI className="item head">
              <strong className="tit">이상오 Jake</strong>
              <p>Front-end Developer</p>
            </LI>
            <LI className="item">
              <strong className="tit">Email</strong>
              <Link className="link" href="mailto:firstvirtue@gmail.com">firstvirtue@gmail.com</Link>
            </LI>
            <LI className="item">
              <strong className="tit">Phone</strong>
              <Link className="link" href="tel:+82 10.5260.0729">+82 10.5260.0729</Link>
            </LI>
            <LI className="item">
              <strong className="tit">Social</strong>
              <Link className="link" href="https://github.com/firstvirtue" target="_blank" rel="noopener noreferrer">Github</Link>
              <Link className="link" href="#">LinkedIn</Link>
              <Link className="link" href="https://instagram.com/sangolee" target="_blank" rel="noopener noreferrer">Instagram</Link>
              <Link className="link" href="#">Facebook</Link>
            </LI>
            <LI>
              <strong className="tit">지금 구직중이에요 :D</strong>
              <Link href="#">이력서</Link>
            </LI>
          </UL>
          <Copyright>© 2021. JAKE LEE 모든 권리 보유.</Copyright>
        </Footer>
      </FooterWrap>
    </>
  )
}

export default footer