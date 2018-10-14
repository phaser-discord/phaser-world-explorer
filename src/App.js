import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Media from 'react-media'

import Collapsible from 'react-collapsible'
import Nav from './components/Nav'

import './App.css';
import NewsletterRoute from './NewsletterRoute'
import { NewsletterProvider } from './NewsletterContext'
import SearchResults from './SearchResults';

const menuTrigger = (
  <div>
    <h3>
      <span className="menu-icon material-icons">menu</span>
      <span>Menu</span>
    </h3>
  </div>
)

const SmallScreen = ({ children }) => (
  <div className="vertPanels">
    <div className="topPanel">
      <div>
        <Collapsible open={false} trigger={menuTrigger}>
          <Nav />
        </Collapsible>
      </div>
    </div>
    <div className="bottomPanel">
      {children}
    </div>
  </div>
)

const LargeScreen = ({ children }) => (
  <div className="horizPanels">
    <div className="leftPanel">
      <div>
        <Nav />
      </div>
    </div>

    <div className="rightPanel">
      <div>{children}</div>
    </div>
  </div>
)

const Layout = (props) => {
  const screenLayout = smallScreen => smallScreen
    ? <SmallScreen>{props.children}</SmallScreen>
    : <LargeScreen>{props.children}</LargeScreen>

  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Explore Phaser World</h1>
      </header>

      <Media query={{ maxWidth: 959 }}>
        {screenLayout}
      </Media>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
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
    );
  }
}

export default App;