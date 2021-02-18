import './App.scss'
import { useRef, useCallback } from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Fujifilm2020 from './pages/fujifilm-2020'
import KiaWorldwide2021 from './pages/kia-worldwide-2021'
import Laneige2019 from './pages/laneige-2019'
import Footer from './components/footer'
import Header from './components/header'
import Cover from './components/cover'
import PostCloseButton from './components/post-close-button'
import gsap from 'gsap'

const routes = [
  { id: 'kia-worldwide-2021', path: '/kia-worldwide-2021', name: '기아 브랜드 쇼케이스', thumbnail: '/image/kia-worldwide/cover-lg.jpg', Component: KiaWorldwide2021 },
  { id: 'fujifilm-2020', path: '/fujifilm-2020', name: '후지필름', thumbnail: '/image/fujifilm/cover-lg.jpg', Component: Fujifilm2020 },
  { id: 'laneige-2019', path: '/laneige-2019', name: '라네즈', thumbnail: '/image/laneige/cover-lg.png', Component: Laneige2019 },
]

function App() {
  // let preview;
  const DUR = 0.6

  const routerEl = useRef(null);

  const onAddEndHandler = (node, done) => {
    if(window.view === 1) {
      if(node.classList.contains('page-enter')) {
        const stylepos = getPreviewStyleAndPosition()
        if(!stylepos) return
        // console.log('enter: ', stylepos)
        window.scrollTo(0, 0)
        window.preview.style.visibility = 'hidden';
        gsap.fromTo(node, stylepos, {
          top: 0,
          left: 0,
          width: '100%',
          height: '',
          borderRadius: 0,
          ease: 'back.out(1.7)',
          duration: DUR,
          onComplete: () => {
            window.scrollTo(0, 0)
            window.view = 0
          }
        })
      } else if(node.classList.contains('page-exit')) {
        
      }
    } else {
      // console.log('transition: ', node.classList)
      if(node.classList.contains('page-enter')) {
        const stylepos = getPreviewStyleAndPosition()
        if(!stylepos) return
        // console.log('enter: ', stylepos)
        window.scrollTo(0, 0)
        window.preview.style.visibility = 'hidden';
        gsap.fromTo(node, stylepos, {
          top: 0,
          left: 0,
          width: '100%',
          height: '',
          borderRadius: 0,
          ease: 'back.out(1.7)',
          duration: DUR,
          onComplete: () => {
            window.scrollTo(0, 0)
          }
        })
      } else if(node.classList.contains('page-exit')) {
        // console.log('exit: ', window.preview)

        if(window.preview.classList.contains('next-preview')) {
          const id = window.preview.getAttribute('data-id')
          window.preview = routerEl.current.querySelector(`.preview[data-id="${id}"]`)
        }
        
        const stylepos = getPreviewStyleAndPosition()
        if(!stylepos) return
        stylepos.ease = 'back.out(1.7)'
        stylepos.onComplete = () => {
          const top = routerEl.current.style.top.replace('px', '').replace('-', '')
          window.preview.style.visibility = 'visible'
          
          routerEl.current.style.top = ''

          routerEl.current.style.position = 'relative'
          window.scrollTo(0, top)
        }
        stylepos.duration = DUR
        
        gsap.to(node, stylepos)
      }
    }
  }

  const getPreviewStyleAndPosition = () => {
    if(!window.preview) return
    
    const { top, left, width, height } = window.preview.getBoundingClientRect();
    
    return {
      top,
      left,
      width,
      height,
      borderRadius: 16
    }
  }

  const history = useHistory()
  const handleOnClick = useCallback((path, id, e) => {
    window.preview = document.querySelector(`.preview[data-id="${id}"]`)
    history && history.push(path)

    e.preventDefault()
    e.stopPropagation()
  }, [history])

  return (
    <>
      <div className="router" ref={routerEl}>
        <Header />

        <div className="preview-nav">
          {routes.map(route => (
            
            <a className="preview-link" onClick={handleOnClick.bind(this, route.path, route.id)} href={route.path}>
              <div className="preview" data-id={route.id}>
                <Cover imgSrc={route.thumbnail} title={route.name} />
              </div>
            </a>
            
          ))}
        </div>

        <Footer />
      </div>

      {/* <TransitionGroup style={{opacity: 0.5}}> */}
      <TransitionGroup>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            
            <CSSTransition
              in={match != null}
              timeout={DUR * 1000}
              classNames="page"
              unmountOnExit
              onEnter = {node => {
                // console.log('Enter: ', node)
                if(routerEl.current.style.position !== 'fixed') {
                  routerEl.current.style.top = -window.pageYOffset + 'px'
                  routerEl.current.style.position = 'fixed'
                }
              }}
              onExit = {node => {
                // console.log('Exit: ', node)
                node.classList.add('page-scroll-block')
                node.style.top = -window.pageYOffset + 'px'
              }}
              addEndListener={onAddEndHandler}
            >
              <div className="page">
                <PostCloseButton />
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
