import React from 'react'
import qs from 'query-string'

import { withNewsletter } from '../util/NewsletterContext'
import { simpleSearch as search } from '../util/search'

const Tutorial = ({ tutorial, issueNumber }) => {
  return (
    <li>
      <a href={tutorial.directlink || tutorial.link}>{tutorial.name}</a>{' '}
      (phaser {tutorial.version || 3}, Issue {issueNumber}): {tutorial.desc}
    </li>
  );
}

const Update = ({ update, updateLink, issueNumber}) => {
  return (
    <li>
      <a href={updateLink}>
        Issue {issueNumber}
      </a>: {update}
    </li>
  );
}

class ExpandedSearchResults extends React.Component {
  results(query) {
    if (!this.props.newsletter.isLoaded) {
      return null
    }

    const r = search(query, this.props.newsletter.items)

    const tutorials = []
    const updates = []

    Object.keys(r).map(iss => {
      tutorials.push(...r[iss].tutorials.map((t, idx) => (
        <Tutorial key={`tut-${iss}-${idx}`} tutorial={t} issueNumber={iss}/>
      )))

      updates.push(...r[iss].updates.map((u, idx) => (
        <Update key={`upd-${iss}-${idx}`} update={u} updateLink={r[iss].ref.Link} issueNumber={iss} />
      )))
    })

    return (
      <div>
        <h3>Tutorials</h3>
        <ul>
          {tutorials}
        </ul>
        <h3>Phaser Updates</h3>
        <ul>
          {updates}
        </ul>
      </div>
    )
  }

  render() {
    const { searchArgs } = this.props
    if (!searchArgs) {
      return null
    }

    return (
      <div>
        <h3>Search Results: {searchArgs.q}</h3>
        {this.results(searchArgs.q)}
      </div>
    )
  }
}

const SearchResults = (props) => {
  const search = props.location && props.location.search
    ? qs.parse(props.location.search)
    : null
  return <ExpandedSearchResults {...props} searchArgs={search} />
}

export default withNewsletter(SearchResults)