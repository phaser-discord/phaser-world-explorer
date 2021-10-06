import React from 'react';
import { Link } from 'react-router-dom';

const NewsletterListItem = ({ item: { issueNumber } = {} }) => {
  return issueNumber ? (
    <Link to={`/newsletter/issue/${issueNumber}`}>Issue {issueNumber}</Link>
  ) : null;
};

export default NewsletterListItem;
