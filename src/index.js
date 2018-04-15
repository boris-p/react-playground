/* global process */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

// a central place to load all icons from
import fontAwesome from './utils/Templating/fontAwesome'

// Import Main styles for this application
import '../scss/style.scss'

// Containers
import Default from './containers/Default'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' name='base' component={Default} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
