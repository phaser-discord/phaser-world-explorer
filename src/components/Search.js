import React from 'react'
import qs from 'query-string'
import { Redirect } from 'react-router-dom'


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
        <form onSubmit={this.handleSubmit}>
          <div>
            <input ref={this.contentSearchRef} type="text"></input>
          </div>
          <div>
            <input type="button" value="Search" onClick={this.handleSearch}></input>
          </div>
        </form>
      </div>
    )
  }
}

export default Search