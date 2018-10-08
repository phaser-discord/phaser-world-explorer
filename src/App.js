import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import './App.css';
import NewsletterRoute from './NewsletterRoute'
import { NewsletterProvider } from './NewsletterContext'
import SearchResults from './SearchResults';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NewsletterProvider src="https://rawgit.com/phaser-discord/community/master/Newsletter%20TOC.yaml">
          <header className="App-header">
            <h1 className="App-title">Explore Phaser World</h1>
          </header>
          <Switch>
            <Route path="/newsletter" component={NewsletterRoute} />
            <Route path="/search" component={SearchResults} />
            <Route exact path="/" component={NewsletterRoute} />
            <Redirect to="/" />
          </Switch>
        </NewsletterProvider>
      </div>
    );
  }
}

export default App;