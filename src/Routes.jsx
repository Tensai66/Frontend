import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import jwt from 'jsonwebtoken'

// User functions
import { setCurrentUser } from './actions/login.js'
import setAuthorizationToken from './api/setAuth'

// Redux
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'

import Navigation from './components/Navigation.jsx'
import Home from './components/Home.jsx'
import Signup from './components/Signup.jsx'

const store = createStore( // Make global store
  rootReducer,
  compose(
    applyMiddleware(thunk), // Apply promise middleware
    window.devToolsExtension ? window.devToolsExtension() : f => f // Allow chrome extension
  )
)

// if(localStorage.jwtToken){
//   setAuthorizationToken(localStorage.jwtToken)
//   store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
// }

export default class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/signup' component={Signup} />
              <Route path='*' render={() => <h3>Page doesn't exist.</h3>}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}
