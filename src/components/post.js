import styled from 'styled-components'
import * as palette from '../variables'

const PostWrap = styled.div`

  position: relative;
  min-height: 100vh;
  background-color: white;
  word-break: keep-all;
  word-wrap: break-word;
  
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0.02em;

  h3 {
    line-height: 1;
  }

  img,
  video {
    width: 100%;
  }

  .footer {
    margin-top: 6rem;
    padding-bottom: 10rem;
  }

  @media only screen and (min-width: ${palette.MAX_POST}) {
    font-size: 18px;
  }
`

const PostBodyWrap = styled.div`
  margin: 0 auto;
  max-width: ${palette.MAX_POST};
  padding: 0 2rem;

  h3 {
    margin-top: 3em;

    &.center {
      text-align: center;
    }
  }

  p {
    margin-top: 2em;
  }

  pre {
    color: #686868;
    font-size: 14px;
    font-family: ${palette.FONT_EN};
  }

  *[data-size="lg"] {
    margin-left: -2rem;
    margin-right: -2rem;
  }

  figure {
    margin-top: 6rem;

    figcaption {
      margin-top: 3px;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 14px;
      color: #7f7f7f;
    }
  }

  @media only screen and (min-width: ${palette.MAX_POST}) {

    .summary {
      margin-left: calc((-100vw + ${palette.MAX_POST}) / 2);
      margin-right: calc((-100vw + ${palette.MAX_POST}) / 2);
    }

    *[data-size="lg"] {
      margin-left: -100px;
      margin-right: -100px;
    }

    *[data-size="max"] {
      margin-left: calc((-100vw + ${palette.MAX_POST}) / 2);
      margin-right: calc((-100vw + ${palette.MAX_POST}) / 2);
    }

    figure {
      margin-top: 10rem;
    }
  }
`

function Post(props) {
  return(
    <>
      <PostWrap className="post">
        {props.children}
      </PostWrap>
    </>
  )
}

function PostBody(props) {
  return(
    <>
      <PostBodyWrap>
        {props.children}
      </PostBodyWrap>
    </>
  )
}

export { Post, PostBody }