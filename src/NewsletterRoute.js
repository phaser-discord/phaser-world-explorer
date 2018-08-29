import React, {
  Component
} from 'react';
import Media from "react-media";
import { Route, Switch, Redirect } from 'react-router-dom'
import NewsletterList from './NewsletterList'
import NewsletterView from './NewsletterView'
import SearchResults from './SearchResults'

const SmallScreen = ({ children }) => (
  <div>
    <div>
      Header
    </div>
    <div>
      Collapseable Nav
    </div>
    <div>
      Search
    </div>
    {children}
  </div>
)

const LargeScreen = ({ children }) => (
  <div>
    <div>
      <div>
        Left Panel
      </div>
      <div>
        - Newsletters
      </div>
    </div>

    <div>
      <div>{children}</div>
    </div>
  </div>
)

class NewsLetterRoute extends Component {
  render() {
    console.log('NewsletterRoute # render')
    const routes = (
      <Switch>
        <Route path="/newsletter/issue/:issue" component={NewsletterView} />
      </Switch>
    )

    const screenLayout = smallScreen => smallScreen
      ? <SmallScreen>{routes}</SmallScreen>
      : <LargeScreen>{routes}</LargeScreen>


    return <Media query={{ maxWidth: 599 }}>{screenLayout}</Media>
  }
}

export default NewsLetterRoute;