import React, {
  Component
} from 'react';
import jsyaml from 'js-yaml';
import './App.css';
import NewsletterList from './NewsletterList'

class App extends Component {
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
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Explore past issues of Phaser World</h1>
        </header>
        {
          this.state.isLoaded ? <NewsletterList className="List-view" listItems={this.state.items} /> : null
        }
      </div>
    );
  }
}

export default App;