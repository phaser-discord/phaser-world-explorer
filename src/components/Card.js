import React from 'react';

import './Card.css';

const Card = ({ header, content, footer, links }) => {
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-content">{content}</div>
      <div className="card-footer">{footer}</div>
      <div className="card-links">{links}</div>
    </div>
  );
};

export default Card;
