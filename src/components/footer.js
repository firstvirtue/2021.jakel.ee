import React from 'react'
import styled, { css } from 'styled-components';

const Footer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  background: #ffffff;
  border-top: 1px solid #dcdbd9;
`

const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const StyledLi = styled.li`
  display: inline-block;
  color: #686868;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 12px;
  width: 33.3333%;

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

function footer() {

  return (
    <>
      <Footer className="footer">
        <UL className="footer-items">
          <StyledLi className="item head">
            <strong className="tit">이상오 Jake</strong>
            <p>Front-end Developer</p>
          </StyledLi>
          <StyledLi className="item">
            <strong className="tit">Email</strong>
            <Link className="link" href="mailto:firstvirtue@gmail.com">firstvirtue@gmail.com</Link>
          </StyledLi>
          <StyledLi className="item">
            <strong className="tit">Phone</strong>
            <Link className="link" href="tel:+82 10.5260.0729">+82 10.5260.0729</Link>
          </StyledLi>
          <StyledLi className="item">
            <strong className="tit">Social</strong>
            <Link className="link" href="#">Twitter</Link>
            <Link className="link" href="#">Instagram</Link>
            <Link className="link" href="#">Facebook</Link>
            <Link className="link" href="#">LinkedIn</Link>
          </StyledLi>
          <StyledLi>
            <strong className="tit">지금 구직중이에요 :D</strong>
            <Link href="#">이력서</Link>
          </StyledLi>
        </UL>
      </Footer>
    </>
  )
}

export default footer