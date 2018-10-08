import React from 'react'
import Media from "react-media"
import { Route, Switch } from 'react-router-dom'
import Collapsible from 'react-collapsible'

import NewsletterList from './NewsletterList'
import NewsletterView from './NewsletterView'

import './NewsletterRoute.css'

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
          <NewsletterList showHeader />
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
        <NewsletterList showHeader />
      </div>
    </div>

    <div className="rightPanel">
      <div>{children}</div>
    </div>
  </div>
)

class NewsLetterRoute extends React.Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/newsletter/issue/:issue" component={NewsletterView} />
      </Switch>
    )

    const screenLayout = smallScreen => smallScreen
      ? <SmallScreen>{routes}</SmallScreen>
      : <LargeScreen>{routes}</LargeScreen>

    return <Media query={{ maxWidth: 959 }}>{screenLayout}</Media>
  }
}

export default NewsLetterRoute