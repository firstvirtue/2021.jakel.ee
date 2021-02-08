import './App.css'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Fujifilm2020 from './pages/fujifilm-2020'
import KiaWorldwide2021 from './pages/kia-worldwide-2021'
import Laneige2019 from './pages/laneige-2019'

const routes = [
  { path: '/fujifilm-2020', name: 'Fujifilm2020', Component: Fujifilm2020 },
  { path: '/kia-worldwide-2021', name: 'KiaWorldwide2021', Component: KiaWorldwide2021 },
  { path: '/laneige-2019', name: 'Laneige2019', Component: Laneige2019 },
]

function App() {
  return (
    <Router>
      <>
      <div className="nav-temp">
        {routes.map(route => (
          <Link
            key={route.path}
            as={NavLink}
            to={route.path}
            activeClassName="active"
            exact
          >
            {route.name}
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
