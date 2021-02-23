import './App.scss'
import { useRef, useCallback } from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Footer from './components/footer'
import Header from './components/header'
import Cover from './components/cover'
import PostCloseButton from './components/post-close-button'
import gsap from 'gsap'
import routes from './routes'

function App() {
  // let preview;
  const DUR = 0.8
  const EASE = 'back.out(0.8)'

  const routerEl = useRef(null)

  const onAddEndHandler = (node, done) => {
    if(window.view === 1) {
      if(node.classList.contains('page-enter')) {
        const stylepos = getPreviewStyleAndPosition()
        if(!stylepos) return done()
        // console.log('enter: ', stylepos)
        
        node.style.visibility = 'hidden';
        const coverResource = new Image()
        coverResource.src = node.querySelector('.cover img').getAttribute('src')
        coverResource.onload = () => {
          node.style.visibility = 'visible';
          window.preview.style.visibility = 'hidden';
          gsap.fromTo(node, stylepos, {
            top: 0,
            left: 0,
            width: '100%',
            height: '',
            borderRadius: 0,
            ease: EASE,
            duration: DUR,
            onComplete: () => {
              window.scrollTo(0, 0)
              window.view = 0
            }
          })
        }
      } else if(node.classList.contains('page-exit')) {
        
      }
    } else {
      // console.log('transition: ', node.classList)
      if(node.classList.contains('page-enter')) {
        const stylepos = getPreviewStyleAndPosition()
        if(!stylepos) return done()

        node.style.visibility = 'hidden';
        
        const coverResource = new Image()
        coverResource.src = node.querySelector('.cover .media').nodeName === 'IMG' ? node.querySelector('.cover .media').getAttribute('src') : node.querySelector('.cover .media').getAttribute('poster')

        coverResource.onload = () => {
          // window.scrollTo(0, 0)
          node.style.visibility = 'visible';
          window.preview.style.visibility = 'hidden';
          gsap.fromTo(node, stylepos, {
            top: 0,
            left: 0,
            width: '100%',
            height: '',
            borderRadius: 0,
            ease: EASE,
            duration: DUR,
            onComplete: () => {
              window.scrollTo(0, 0)
            },
            // delay: 0.1,
          })
        }
        
      } else if(node.classList.contains('page-exit')) {
        // console.log('exit: ', window.preview)

        if(window.preview && window.preview.classList.contains('next-preview')) {
          const id = window.preview.getAttribute('data-id')
          window.preview = routerEl.current.querySelector(`.preview[data-id="${id}"]`)
        }
        
        const stylepos = getPreviewStyleAndPosition()
        if(!stylepos) return
        stylepos.ease = EASE
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

        {/* <h2 className="title">모든 프로젝트</h2> */}
        <div className="preview-container">
          <div className="preview-nav">
            {routes.map(route => (
              
              <a className="preview-link" onClick={handleOnClick.bind(this, route.path, route.id)} href={route.path}>
                <div className="preview-wrap">
                  <div className="preview" data-id={route.id}>
                    <Cover imgSrc={route.thumbnail} videoSrc={route.video} title={route.name} />
                  </div>
                  <div className="preview-cont">
                    <strong className="publish">{route.publish}</strong>
                    <span className="tit">{route.title}</span>
                    <p className="desc">{route.desc}</p>
                  </div>
                </div>
              </a>
              
            ))}
          </div>
        </div>

        <Footer />
      </div>

      {/* <TransitionGroup style={{opacity: 0.5}}> */}
      <TransitionGroup>
      {routes.map(({ path, name, thumbnail, video, Component }) => (
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
                <Component title={name} imgSrc={thumbnail} videoSrc={video}/>
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
