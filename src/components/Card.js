import React from 'react';

import './Card.css';

const Card = ({ header, content, footer, links }) => {
  return (
    <div className="card">
      {header ? <div className="card-header">{header}</div> : null}
      {content ? <div className="card-content">{content}</div> : null}
      {footer ? <div className="card-footer">{footer}</div> : null}
      {links ? <div className="card-links">{links}</div> : null}
    </div>
  );
};

export default Card;
