import React from 'react'

import Search from './Search'

import NewsletterListItem from '../components/NewsletterListItem'
import { withNewsletter } from '../util/NewsletterContext'

const mkLink = itm =>
  <li key={`${itm.Issue}-li`}>
    <NewsletterListItem key={itm.Issue} item={itm} />
  </li>

const Nav = (props) => {
  const newsletter = props.newsletter || {}
  const newsletterLinks = newsletter.isLoaded
    ? newsletter.items.map(mkLink)
    : <li>Loading...</li>

  return (
    <nav className="nav">
      <div>
        <h3>Search</h3>
        <Search onSearch={props.onSearch} />
      </div>
      <div>
        <h3>Newsletters</h3>
        <ul onClick={props.onClickIssue}>
          {newsletterLinks}
        </ul>
      </div>
    </nav>
  )
}

export default withNewsletter(Nav)