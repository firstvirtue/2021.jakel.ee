import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Alink = styled.a`
  position: fixed;
  top: 8%;
  right: 5%;
  z-index: 10;
  color: #000000;
  text-decoration: none;
  border-bottom: 1px solid #fe5733;
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