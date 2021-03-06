import React from 'react';
import qs from 'query-string';
import { Redirect } from 'react-router-dom';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { nextLocation: null };
    this.contentSearchRef = React.createRef();

    this.handleSubmit = this.handleSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleSearch();
  }

  handleSearch() {
    const cur = this.contentSearchRef.current;
    if (!cur) {
      return;
    }

    const nextLocation = {
      pathname: '/search',
      search: qs.stringify({
        q: cur.value
      })
    };

    this.setState({ nextLocation });

    if (this.props.onSearch) {
      this.props.onSearch(cur.value);
    }
  }

  renderRedirect() {
    return this.state.nextLocation ? (
      <Redirect push to={this.state.nextLocation} />
    ) : null;
  }

  render() {
    const random = Math.floor(Math.random() * 1000);

    return (
      <div className={this.props.className}>
        {this.renderRedirect()}
        <h2>
          <label htmlFor={'search' + random}>Search</label>
        </h2>
        <form onSubmit={this.handleSubmit} className="search">
          <div className="input">
            <input
              ref={this.contentSearchRef}
              type="text"
              id={'search' + random}
            ></input>
          </div>
          <div className="button">
            <button
              type="button"
              onClick={this.handleSearch}
              aria-label="Search"
            >
              <span className="material-icons">search</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
