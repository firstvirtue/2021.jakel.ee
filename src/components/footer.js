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

  svg {
    position: relative;
    width: 20px;
    height: 20px;
    top: 5px;
    transform: rotate(45deg);
    transition: stroke 400ms;
  }

  &:hover {
    color: #E06D72;

    svg {
      stroke: #E06D72;
    }
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
              <div>Front-end Developer</div>
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
              <Link className="link" href="https://www.linkedin.com/in/firstvirtue/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
              <Link className="link" href="https://instagram.com/sangolee" target="_blank" rel="noopener noreferrer">Instagram</Link>
              {/* <Link className="link" href="#">Facebook</Link> */}
            </LI>
            <LI>
              <strong className="tit">지금 구직중이에요 <span>:D</span></strong>
              <Link href="/resource/이상오 2021-02-22.pdf" target="_blank" rel="noopener noreferrer">
                <span>이력서</span>
                <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </LI>
          </UL>
          {/* <Copyright>© 2021. Jake Lee.</Copyright> */}
        </Footer>
      </FooterWrap>
    </>
  )
}

export default footer