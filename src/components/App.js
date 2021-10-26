import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { HomePage, LatestPage, NotFoundPage } from './index'
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/latest" component={LatestPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </ThemeProvider>    
    </I18nextProvider>
  )
}

export default App
