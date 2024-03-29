import React from 'react';

import Card from './Card';
import Tutorial from './Tutorial';
import { withNewsletter } from '../util/NewsletterContext';
import { simpleSearch as search } from '../util/search';

import './SearchResults.css';

const Update = ({ update, updateLink, issueNumber }) => {
  return (
    <li>
      <Card
        header={
          <>
            <p>{update}</p>
            <div
              className="card-badge"
              aria-label="Issue where this update is from"
            >
              Issue {issueNumber}
            </div>
          </>
        }
        links={
          <a href={updateLink} target="_blank" rel="noopener noreferrer">
            Read newsletter
          </a>
        }
      />
    </li>
  );
};

class ExpandedSearchResults extends React.Component {
  results(query) {
    if (!this.props.newsletter.isLoaded) {
      return null;
    }

    const r = search(query, this.props.newsletter.issues);

    const tutorials = [];
    const updates = [];

    Object.keys(r).forEach(iss => {
      tutorials.push(
        ...r[iss].tutorials.map((t, idx) => (
          <Tutorial key={`tut-${iss}-${idx}`} tutorial={t} issueNumber={iss} />
        ))
      );

      updates.push(
        ...r[iss].updates.map((u, idx) => (
          <Update
            key={`upd-${iss}-${idx}`}
            update={u}
            updateLink={r[iss].ref.directLink}
            issueNumber={iss}
          />
        ))
      );
    });

    return (
      <>
        <div>
          <h3>Tutorials</h3>
          <ul className="tutorials">{tutorials}</ul>
        </div>
        <div>
          <h3>Phaser Updates</h3>
          <ul className="updates">{updates}</ul>
        </div>
      </>
    );
  }

  render() {
    const { searchString } = this.props;

    return searchString ? (
      <>
        <h2>Search Results: {searchString}</h2>
        {this.results(searchString)}
      </>
    ) : null;
  }
}

const SearchResults = props => {
  const search =
    props.location && props.location.search
      ? new URLSearchParams(props.location.search).get('q')
      : null;
  return (
    <main className="searchResults">
      <ExpandedSearchResults {...props} searchString={search} />
    </main>
  );
};

export default withNewsletter(SearchResults);
