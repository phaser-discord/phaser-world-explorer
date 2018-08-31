import React from 'react'

import './NewsletterList.css'

import NewsletterListItem from './NewsletterListItem'
import { withNewsletter } from './NewsletterContext'

class NewsletterList extends React.Component {
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
        {header}
        <div>
          <ul>
            {items.map(item =>
              <li>
                <NewsletterListItem key={item.Issue} item={item} />
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default withNewsletter(NewsletterList)