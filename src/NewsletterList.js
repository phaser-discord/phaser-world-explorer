import React from 'react'
import qs from 'query-string'

import { Redirect } from 'react-router-dom'
import './NewsletterList.css'

import NewsletterListItem from './NewsletterListItem'
import { withNewsletter } from './NewsletterContext'

class NewsletterList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { nextLocation: null }
    this.contentSearchRef = React.createRef()

    this.handleSearch = this.handleSearch.bind(this)
    this.renderRedirect = this.renderRedirect.bind(this)
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
    const { showHeader } = this.props
    const { isLoaded, items } = this.props.newsletter
    if (!isLoaded) {
      return null
    }

    const header = showHeader ? (
      <div>
        <h3>Newsletter Back Issues</h3>
      </div>
    ) : null

    return (
      <div className="ListView">
        {this.renderRedirect()}
        {header}
        <div>
          <ul>
            {items.map(item =>
              <li key={`${item.Issue}-li`}>
                <NewsletterListItem key={item.Issue} item={item} />
              </li>
            )}
          </ul>
        </div>
        <div>
          <h3>Search</h3>
          <div>
            <input ref={this.contentSearchRef} type="text"></input>
          </div>
          <div>
            <input type="button" value="Search" onClick={this.handleSearch}></input>
          </div>
        </div>
      </div>
    );
  }
}

export default withNewsletter(NewsletterList)