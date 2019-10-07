import React from 'react'
import qs from 'query-string'
import { Redirect } from 'react-router-dom'
import './Search.css'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = { nextLocation: null }
    this.contentSearchRef = React.createRef()

    this.handleSubmit = this.handleSearch.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.renderRedirect = this.renderRedirect.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.handleSearch()
  }

  handleSearch() {
    const cur = this.contentSearchRef.current
    if (!cur) {
      return
    }

    const nextLocation = {
      pathname: '/search',
      search: qs.stringify({
        q: cur.value,
      }),
    }

    this.setState({ nextLocation })
  }

  renderRedirect() {
    return this.state.nextLocation
      ? <Redirect push to={this.state.nextLocation} />
      : null
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <form onSubmit={this.handleSubmit} className="search">
          <div className="input">
            <input ref={this.contentSearchRef} type="text"></input>
          </div>
          <div className="button">
            <button type="button" onClick={this.handleSearch}>
              <i className="material-icons">search</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Search