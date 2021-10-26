import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { HomePage, LatestPage, NotFoundPage } from './index'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/latest" component={LatestPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </ThemeProvider>    
    </>
  )
}

export default App
