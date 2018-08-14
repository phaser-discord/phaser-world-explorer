import React, {
  Component
} from 'react';
import Media from "react-media";
import { Route, Switch, Redirect } from 'react-router-dom'
import jsyaml from 'js-yaml';
import NewsletterList from './NewsletterList'

class NewsLetterRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://rawgit.com/phaser-discord/community/master/Newsletter%20TOC.yaml")
      .then(res => res.text())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: jsyaml.safeLoad(result)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const NewsletterListRoute = () => {
      return this.state.isLoaded ? <NewsletterList className="List-view" listItems={this.state.items} /> : null
    }
    const NewsletterHomeRoute = () => {
      return <p>Home view...</p>
    }
    const NewsletterViewRoute = () => {
      return <p>Coming soon...</p>
    }

    return (
      <Media query={{ maxWidth: 599 }}>
        {screenIsSmall => screenIsSmall
          // small screen has no redirect
          ? <div><Switch>
            <Route exact path="/issues/" render={NewsletterListRoute} />
            <Route exact path="/issues/home" render={NewsletterHomeRoute} />
            <Route path="/issues/:id" render={NewsletterViewRoute} />
          </Switch></div>
          // large screen does!
          : <div><NewsletterListRoute /><Switch>
            <Route exact path="/issues/home" render={NewsletterHomeRoute} />
            <Route path="/issues/:id" render={NewsletterViewRoute} />
            <Redirect from="/issues" to="/issues/home" />
          </Switch></div>
        }
      </Media>
    )
  }
}

export default NewsLetterRoute;