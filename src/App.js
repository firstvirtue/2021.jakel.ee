import './App.scss'
import { useRef, useCallback } from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Fujifilm2020 from './pages/fujifilm-2020'
import KiaWorldwide2021 from './pages/kia-worldwide-2021'
import Laneige2019 from './pages/laneige-2019'
import gsap from 'gsap'

const routes = [
  { id: 'fujifilm-2020', path: '/fujifilm-2020', name: '후지필름', thumbnail: '/image/fujifilm-main-01.jpg', Component: Fujifilm2020 },
  { id: 'kia-worldwide-2021', path: '/kia-worldwide-2021', name: '기아 월드와이드', thumbnail: '/image/kia-worldwide-main-01.png', Component: KiaWorldwide2021 },
  { id: 'laneige-2019', path: '/laneige-2019', name: '라네즈', thumbnail: '/image/laneige-main-01.png', Component: Laneige2019 },
]

function App() {
  let preview;

  const routerEl = useRef(null);

  const onAddEndHandler = (node, done) => {
    console.log('transition: ', node.classList)
    if(node.classList.contains('page-enter')) {
      const stylepos = getPreviewStyleAndPosition()
      console.log(stylepos)
      gsap.fromTo(node, { 
        top: stylepos.top,
        left: stylepos.left,
        width: stylepos.width,
        height: stylepos.height,
        borderRadius: stylepos.borderRadius,
      }, {
        top: 0,
        left: 0,
        width: '100%',
        height: '',
        borderRadius: 0,
        // ease: CustomEase.create('cubic', '0.8, -0.25, 0.33, 1.52'),
        ease: 'back.out(1.7)',
      })
    } else if(node.classList.contains('page-exit')) {
      gsap.fromTo(node, { opacity: 1 }, { opacity: 0, onComplete: () => {
        routerEl.current.style.position = 'relative';
      }})
    }

    window.scrollTo(0, 0)
  }

  const getPreviewStyleAndPosition = () => {
    const { top, left, width, height } = preview.getBoundingClientRect();

    return {
      top,
      left,
      width,
      height,
      borderRadius: 16
    }
  }

  const history = useHistory()
  const handleOnClick = useCallback((path, id) => {
    preview = document.querySelector(`.preview[data-id="${id}"]`)
    history && history.push(path)
  }, [history])

  return (
    <>
      <div className="router" ref={routerEl}>
        <h1>Jake Lee</h1>
        <figure>
          <blockquote>
            난 내 예술로 사람들을 어루만지고 싶다. 그들이 이렇게 말하길 바란다. 그는 마음이 깊은 사람이구나, 마음이 따뜻한 사람이구나.
            <figcaption>— 빈센트 반 고흐, <cite>러빙 빈센트</cite></figcaption>
          </blockquote>
        </figure>

        <div className="preview-nav">
          {routes.map(route => (
            
            <a className="preview-link" onClick={handleOnClick.bind(this, route.path, route.id)} >
              <div className="preview" data-id={route.id}>
                <div className="cover">
                  <div className="img-wrap">
                    <img src={route.thumbnail} alt=""/>
                  </div>
                  <h2 className="title">{route.name}</h2>
                </div>
              </div>
            </a>
            
          ))}
        </div>
      </div>

      <TransitionGroup>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
              onEnter = {node => {
                console.log('Enter: ', node)
                routerEl.current.style.position = 'fixed'
              }}
              onExit = {node => {
                console.log('Exit: ', node)
              }}
              addEndListener={onAddEndHandler}
            >
              <div>
                <Component />
              </div>
            </CSSTransition>
          
          )}
        </Route>
      ))}
      </TransitionGroup>
    </>
  );
}

export default App;
