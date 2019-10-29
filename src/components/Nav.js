import React from 'react';

import Search from './Search';

import NewsletterListItem from '../components/NewsletterListItem';
import { withNewsletter } from '../util/NewsletterContext';

import './Nav.css';

const mkLink = itm => (
  <li key={`${itm.Issue}-li`}>
    <NewsletterListItem key={itm.Issue} item={itm} />
  </li>
);

const Nav = props => {
  const newsletter = props.newsletter || {};
  const newsletterLinks = newsletter.isLoaded ? (
    newsletter.items.map(mkLink)
  ) : (
    <li>Loading...</li>
  );

  return (
    <nav className="nav">
      <Search onSearch={props.onSearch} className="searchContainer" />
      <div className="issueContainer">
        <h2>Newsletters</h2>
        <ul onClick={props.onClickIssue}>{newsletterLinks}</ul>
      </div>
    </nav>
  );
};

export default withNewsletter(Nav);
