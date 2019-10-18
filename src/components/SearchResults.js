import React from 'react';
import qs from 'query-string';

import { withNewsletter } from '../util/NewsletterContext';
import { simpleSearch as search } from '../util/search';

class ExpandedSearchResults extends React.Component {
  results(query) {
    if (!this.props.newsletter.isLoaded) {
      return null;
    }

    const r = search(query, this.props.newsletter.items);

    const tutorials = [];
    const updates = [];

    Object.keys(r).map(iss => {
      tutorials.push(
        ...r[iss].tutorials.map((t, idx) => (
          <li key={`tut-${iss}-${idx}`}>
            <a href={t.directlink || t.link}>{t.name}</a> (phaser {t.version},
            Issue {iss}): {t.desc}
          </li>
        ))
      );

      updates.push(
        ...r[iss].updates.map((u, idx) => (
          <li key={`upd-${iss}-${idx}`}>
            <a href={r[iss].ref.Link}>Issue {iss}</a>: {u}
          </li>
        ))
      );
    });

    return (
      <div>
        <h3>Tutorials</h3>
        <ul>{tutorials}</ul>
        <h3>Phaser Updates</h3>
        <ul>{updates}</ul>
      </div>
    );
  }

  render() {
    const { searchArgs } = this.props;
    if (!searchArgs) {
      return null;
    }

    return (
      <div>
        <h3>Search Results: {searchArgs.q}</h3>
        {this.results(searchArgs.q)}
      </div>
    );
  }
}

const SearchResults = props => {
  const search =
    props.location && props.location.search
      ? qs.parse(props.location.search)
      : null;
  return <ExpandedSearchResults {...props} searchArgs={search} />;
};

export default withNewsletter(SearchResults);
