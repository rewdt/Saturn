import React from 'react'
import Home from './pages/Home'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './pages/Login'

export default function App() {
  return (
    <Router>
      <div>
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  )
}
