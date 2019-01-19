import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Materialize from 'materialize-css/dist/js/materialize'

import { Home, Login, Register, Dashboard } from './pages/'
import { Navbar } from './components/layout/'

class App extends Component {
  componentDidMount() {
    const sidenavEl = document.querySelectorAll('.sidenav')
    Materialize.Sidenav.init(sidenavEl)
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}

export default App
