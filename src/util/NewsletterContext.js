import React from 'react';

import { fetchAndParseIssues } from './fetchAndParseIssues';

const Context = React.createContext({
  isLoaded: false,
  error: null,
  issues: null
});

export class NewsletterProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      issues: []
    };
  }

  componentDidMount() {
    fetchAndParseIssues(this.props.src)
      .then(res => {
        this.setState({
          isLoaded: true,
          issues: res
        });
      })
      .catch(err => {
        this.setState({
          isLoaded: true,
          error: err
        });
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const withNewsletter = Component => props =>
  (
    <Context.Consumer>
      {({ isLoaded, error, issues }) => (
        <Component {...props} newsletter={{ isLoaded, error, issues }} />
      )}
    </Context.Consumer>
  );
