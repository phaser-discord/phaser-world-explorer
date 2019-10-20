import React from 'react';

import jsyaml from 'js-yaml';

const Context = React.createContext({
  isLoaded: false,
  error: null,
  items: null
});

export class NewsletterProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      items: null
    };
  }

  componentDidMount() {
    fetch(this.props.src)
      .then(res => res.text())
      .then(
        res => {
          this.setState({
            isLoaded: true,
            items: jsyaml.safeLoad(res)
          });
        },
        err => {
          this.setState({
            isLoaded: true,
            error: err
          });
        }
      );
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const withNewsletter = Component => props => (
  <Context.Consumer>
    {({ isLoaded, error, items }) => (
      <Component {...props} newsletter={{ isLoaded, error, items }} />
    )}
  </Context.Consumer>
);
