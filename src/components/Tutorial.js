import React from 'react';

import Card from './Card';

import './Tutorial.css';

const Tutorial = ({ tutorial, issueNumber }) => {
  return (
    <li className="tutorial" aria-label="Tutorial list item">
      <Card
        header={
          <>
            <h4 className="card-title">{tutorial.name}</h4>
            <div className="badges">
              {issueNumber && (
                <div
                  className="card-badge"
                  aria-label="Issue where this tutorial is from"
                >
                  Issue {issueNumber}
                </div>
              )}
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
              {tutorial.directlink ? 'Read more on phaser.io' : 'Read more'}
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

export default Tutorial;
