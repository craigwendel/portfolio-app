import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
// import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import About from './components/AboutMe'
import Portfolio from './components/Portfolio'

ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
    <Route path='/portfolio' component={Portfolio}  />
    <Route path='/aboutme' component={About} />
    <Route path='/' component={Home} />
    </Switch>
  </BaseLayout>
</BrowserRouter>

  , document.getElementById('root'))
registerServiceWorker()
