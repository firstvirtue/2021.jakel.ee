import './App.scss'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Fujifilm2020 from './pages/fujifilm-2020'
import KiaWorldwide2021 from './pages/kia-worldwide-2021'
import Laneige2019 from './pages/laneige-2019'
import gsap from 'gsap'

const routes = [
  { path: '/fujifilm-2020', name: '후지필름', thumbnail: '/image/fujifilm-main-01.jpg', Component: Fujifilm2020 },
  { path: '/kia-worldwide-2021', name: '기아 월드와이드', thumbnail: '/image/kia-worldwide-main-01.png', Component: KiaWorldwide2021 },
  { path: '/laneige-2019', name: '라네즈', thumbnail: '/image/laneige-main-01.png', Component: Laneige2019 },
]

function App() {
  const onAddEndHandler = (node, done) => {
    console.log('transition: ', node.classList)
    if(node.classList.contains('page-enter')) {
      gsap.fromTo(node, { opacity: 0 }, { opacity: 1 })
    } else if(node.classList.contains('page-exit')) {

    }
  }

  return (
    <Router>
      <>

      <h1>Jake Lee</h1>
      <figure>
        <blockquote>
          난 내 예술로 사람들을 어루만지고 싶다. 그들이 이렇게 말하길 바란다. 그는 마음이 깊은 사람이구나, 마음이 따뜻한 사람이구나.
          <figcaption>— 빈센트 반 고흐, <cite>러빙 빈센트</cite></figcaption>
        </blockquote>
      </figure>

      <div className="preview-nav">
        {routes.map(route => (
          
          <Link
            key={route.path}
            as={NavLink}
            to={route.path}
            exact="true"
            className="preview-link"
          >
            <div className="preview">
              <div className="cover">
                <div className="img-wrap">
                  <img src={route.thumbnail} alt=""/>
                </div>
                <h2 className="title">{route.name}</h2>
              </div>
            </div>
          </Link>
          
        ))}
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
              onEntering = {node => {
                window.scrollTo(0, 0)
              }}
              onEnter = {node => {
                console.log('Enter: ', node)
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
    </Router>
  );
}

export default App;
