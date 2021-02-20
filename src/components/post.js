import styled from 'styled-components'
import * as palette from '../variables'

const PostWrap = styled.div`

  position: relative;
  min-height: 100vh;
  background-color: white;

  article {
    margin: 0 auto;
    max-width: ${palette.MAX_POST};

    @media only screen and (min-width: ${palette.MAX_POST}) {
      & > .cover,
      .summary {
        margin-left: calc((-100vw + ${palette.MAX_POST}) / 2);
        margin-right: calc((-100vw + ${palette.MAX_POST}) / 2);
      }

      .next-preview {
        margin-left: calc((-100vw + ${palette.MAX_POST} + 200px) / 2);
        margin-right: calc((-100vw + ${palette.MAX_POST} + 200px) / 2);
      }

      *[data-size="lg"] {
        margin-left: -100px;
        margin-right: -100px;
      }
    }
  }
  

  h3 {
    line-height: 1;
  }

  img,
  video {
    width: 100%;
  }

  .footer {
    margin-top: 6rem;
    margin-bottom: 10rem;
  }
`

function Post(props) {
  return(
    <>
      <PostWrap className="post">
        <article>
          {props.children}
        </article>
      </PostWrap>
    </>
  )
}

export { Post }