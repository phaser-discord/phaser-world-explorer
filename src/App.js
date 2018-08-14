import React, {
  Component
} from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import NewsletterRoute from './NewsletterRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Explore past issues of Phaser World</h1>
        </header>
        <Route exact path="/" render={() => <Redirect to="/issues" />} />
        <Route path="/issues" component={NewsletterRoute} />
      </div>
    );
  }
}

export default App;