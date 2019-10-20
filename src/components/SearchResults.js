import React from 'react';
import qs from 'query-string';

import Card from './Card';
import { withNewsletter } from '../util/NewsletterContext';
import { simpleSearch as search } from '../util/search';

import './SearchResults.css';

const Tutorial = ({ tutorial, issueNumber }) => {
  return (
    <li className="tutorial" aria-label="Tutorial list item">
      <Card
        header={
          <>
            <h4 className="card-title">{tutorial.name}</h4>
            <div className="badges">
              <div
                className="card-badge"
                aria-label="Issue where this tutorial is from"
              >
                Issue {issueNumber}
              </div>
              <div
                className="card-badge"
                aria-label="Phaser version for this tutorial"
              >
                Phaser {tutorial.version === 'v2' ? '2/CE' : '3'}
              </div>
            </div>
          </>
        }
        content={<p aria-label="Tutorial description">{tutorial.desc}</p>}
        footer={
          <div className="tags" aria-label="Tags">
            {tutorial.tags &&
              tutorial.tags.map(tag => {
                return (
                  <div className="card-badge" key={tag}>
                    {tag}
                  </div>
                );
              })}
          </div>
        }
        links={
          <>
            <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
              Read more on phaser.io
            </a>
            {tutorial.directlink && (
              <a
                href={tutorial.directlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go directly to site
              </a>
            )}
          </>
        }
      />
    </li>
  );
};

const Update = ({ update, updateLink, issueNumber }) => {
  return (
    <li>
      <a href={updateLink}>Issue {issueNumber}</a>: {update}
    </li>
  );
};

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
          <Tutorial key={`tut-${iss}-${idx}`} tutorial={t} issueNumber={iss} />
        ))
      );

      updates.push(
        ...r[iss].updates.map((u, idx) => (
          <Update
            key={`upd-${iss}-${idx}`}
            update={u}
            updateLink={r[iss].ref.Link}
            issueNumber={iss}
          />
        ))
      );
    });

    return (
      <div className="searchResults">
        <h3>Tutorials</h3>
        <ul className="tutorials">{tutorials}</ul>
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
