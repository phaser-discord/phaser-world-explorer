import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NewsletterView from './components/NewsletterView'

import './NewsletterRoute.css'

const NewsLetterRoute = () =>
  <Switch>
    <Route path="/newsletter/issue/:issue" component={NewsletterView} />
  </Switch>

export default NewsLetterRoute