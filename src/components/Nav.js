import React from 'react';
import Collapsible from 'react-collapsible';

import Search from './Search';

import NewsletterListItem from '../components/NewsletterListItem';
import { withNewsletter } from '../util/NewsletterContext';

import './Nav.css';

const mkLink = itm => (
  <li key={`${itm.Issue}-li`}>
    <NewsletterListItem item={itm} />
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
  const dateSortedNewsletters = {};

  props.newsletters.forEach(issue => {
    const year = issue.Date.split('/')[1];

    if (dateSortedNewsletters[year]) {
      dateSortedNewsletters[year].push(issue);
    } else {
      dateSortedNewsletters[year] = [issue];
    }
  });

  return Object.keys(dateSortedNewsletters)
    .reverse()
    .map(year => {
      return (
        <div key={year} className="issue-year">
          <Collapsible open trigger={menuTrigger(year)}>
            <ul onClick={props.onClick}>
              {dateSortedNewsletters[year].map(mkLink)}
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
            newsletters={newsletter.items}
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
