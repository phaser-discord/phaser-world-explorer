import React from 'react';

import Search from './Search';

import NewsletterListItem from '../components/NewsletterListItem';
import { withNewsletter } from '../util/NewsletterContext';

import './Nav.css';

const mkLink = itm => (
  <li key={`${itm.Issue}-li`}>
    <NewsletterListItem item={itm} />
  </li>
);

const Nav = props => {
  const newsletter = props.newsletter || {};

  const dateSortedNewsletters = {};
  if (newsletter.isLoaded) {
    newsletter.items.forEach(issue => {
      const year = issue.Date.split('/')[1];

      if (dateSortedNewsletters[year]) {
        dateSortedNewsletters[year].push(issue);
      } else {
        dateSortedNewsletters[year] = [issue];
      }
    });
  }

  let newsletterLinks = Object.keys(dateSortedNewsletters)
    .reverse()
    .map(year => {
      return (
        <div key={year}>
          <h3>{year}</h3>
          <ul onClick={props.onClickIssue}>
            {dateSortedNewsletters[year].map(mkLink)}
          </ul>
        </div>
      );
    });

  console.log(newsletterLinks);

  return (
    <nav className="nav">
      <Search onSearch={props.onSearch} className="searchContainer" />
      <div className="issueContainer">
        <h2>Newsletters</h2>
        {newsletter.isLoaded ? newsletterLinks : <p>Loading...</p>}
      </div>
    </nav>
  );
};

export default withNewsletter(Nav);
