import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Alink = styled.a`
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 10;
`

function PostCloseButton() {

  const history = useHistory()
  const handleOnClick = (e) => {
    history.goBack()
    // history.block('ww?')
    
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <>
      <Alink href="/" onClick={handleOnClick.bind(this)}>
        <span>닫기</span>
      </Alink>
    </>
  )
}

export default PostCloseButton