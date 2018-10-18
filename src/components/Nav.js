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
    <div>
      <div>
        <h3>Newsletters</h3>
        <ul>
          {newsletterLinks}
        </ul>
      </div>
      <div>
        <h3>Search</h3>
        <Search />
      </div>
    </div>
  )
}

export default withNewsletter(Nav)