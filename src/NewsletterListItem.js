import React from 'react'
import { Link } from 'react-router-dom'

const NewsletterListItem = ({ item }) =>
  item ? (
    <Link to={`${process.env.PUBLIC_URL}/newsletter/issue/${item.Issue}`}>
      Issue {item.Issue}
    </Link>
  ) : null

export default NewsletterListItem