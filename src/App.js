import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import './App.css'
import { NewsletterProvider } from './NewsletterContext'
import NewsletterRoute from './NewsletterRoute'
import SearchResults from './SearchResults'
import Layout from './Layout'

const App = () => (
  <div className="App">
    <NewsletterProvider src="https://rawgit.com/phaser-discord/community/master/Newsletter%20TOC.yaml">
      <Layout>
        <Switch>
          <Route path="/newsletter" component={NewsletterRoute} />
          <Route path="/search" component={SearchResults} />
          <Route exact path="/" component={NewsletterRoute} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </NewsletterProvider>
  </div>
)

export default App;