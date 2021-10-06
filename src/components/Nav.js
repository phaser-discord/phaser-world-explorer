import React from 'react';
import Collapsible from 'react-collapsible';

import Search from './Search';

import NewsletterListItem from '../components/NewsletterListItem';
import { withNewsletter } from '../util/NewsletterContext';

import './Nav.css';

const makeLink = issue => (
  <li key={`${issue.issueNumber}-li`}>
    <NewsletterListItem item={issue} />
  </li>
);

const menuTrigger = year => (
  <div className="menu-trigger">
    <span className="menu-icon material-icons" aria-hidden>
      arrow_drop_down
    </span>
    <h3>{year}</h3>
  </div>
);

const SortedNewsletters = props => {
  const dateSortedNewsletters = props.newsletters.reduce(
    (dateSortedNewsletters, issue) => {
      const year = issue.date.getFullYear();

      if (dateSortedNewsletters[year]) {
        dateSortedNewsletters[year].push(issue);
      } else {
        dateSortedNewsletters[year] = [issue];
      }
      return dateSortedNewsletters;
    },
    []
  );

  return Object.keys(dateSortedNewsletters)
    .reverse()
    .map(year => {
      return (
        <div key={year} className="issue-year">
          <Collapsible open trigger={menuTrigger(year)}>
            <ul onClick={props.onClick}>
              {dateSortedNewsletters[year].map(makeLink)}
            </ul>
          </Collapsible>
        </div>
      );
    });
};

const Nav = props => {
  const newsletter = props.newsletter || {};

  return (
    <nav className="nav">
      <Search onSearch={props.onSearch} className="searchContainer" />
      <div className="issueContainer">
        <h2>Newsletters</h2>
        {newsletter.isLoaded ? (
          <SortedNewsletters
            newsletters={newsletter.issues}
            onClick={props.onClickIssue}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </nav>
  );
};

export default withNewsletter(Nav);
