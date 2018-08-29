import React, {
  Component
} from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import NewsletterRoute from './NewsletterRoute'
import NewsletterList from './NewsletterList'
import { NewsletterProvider } from './NewsletterContext'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsletterProvider src="https://rawgit.com/phaser-discord/community/master/Newsletter%20TOC.yaml">
          <header className="App-header">
            <h1 className="App-title">Explore Phaser World</h1>
          </header>
          <Switch>
            <Route path="/newsletter" component={NewsletterRoute} />
            <Route exact path="/" component={NewsletterList} />
            <Route path="" component={NewsletterList} />
          </Switch>
        </NewsletterProvider>
      </div>
    );
  }
}

export default App;