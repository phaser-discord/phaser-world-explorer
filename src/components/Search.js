import React from 'react';
import qs from 'query-string';
import { Redirect } from 'react-router-dom';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchValue: '', nextLocation: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleSearch();
  }

  handleSearch() {
    const nextLocation = {
      pathname: '/search',
      search: qs.stringify({
        q: this.state.searchValue
      })
    };

    this.setState({ nextLocation });

    if (this.props.onSearch) {
      this.props.onSearch(this.state.searchValue);
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
              type="text"
              id={'search' + random}
              value={this.state.searchValue}
              onChange={this.handleChange}
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
