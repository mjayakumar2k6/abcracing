import 'react-hot-loader/patch'
import React from 'react'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { basename } from './config'
import App from './components/App'

const renderApp = () => (
  <React.StrictMode>
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
  </React.StrictMode>
)

const root = document.getElementById('app');
render(renderApp(), document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./components/App', () => {
    require('./components/App')
    render(renderApp(), root)
  })
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
