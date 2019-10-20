import React from 'react';

import Card from './Card';
import { withNewsletter } from '../util/NewsletterContext';

import './NewsletterView.css';

const downloadURL = item =>
  `https://phaser.io/images/newsletter/pdf/issue${item.Issue}.pdf`;

const Tutorial = ({ tutorial }) => {
  return (
    <li className="tutorial" aria-label="Tutorial list item">
      <Card
        header={
          <>
            <h4 className="card-title">{tutorial.name}</h4>
            <div
              className="card-badge"
              aria-label="Phaser version for this tutorial"
            >
              Phaser {tutorial.version === 'v2' ? '2/CE' : '3'}
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
            <a
              href={tutorial.directlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go directly to site
            </a>
          </>
        }
      />
    </li>
  );
};

class NewsletterView extends React.Component {
  constructor(props) {
    super(props);

    this.issueRef = React.createRef();
  }
  currentIssue() {
    const { isLoaded, items } = this.props.newsletter;
    if (!isLoaded) {
      return null;
    }

    const issueNo = Number(this.props.match.params.issue);
    return items.find(i => i.Issue === issueNo);
  }

  render() {
    const issue = this.currentIssue();
    if (!issue) {
      return null;
    }
    this.props.history.listen(stuff => this.issueRef.current.focus());

    return (
      <main className="Issue-view">
        <h2>
          <a
            href={issue.Link}
            target="_blank"
            rel="noopener noreferrer"
            ref={this.issueRef}
          >
            Phaser World Issue {issue.Issue}
          </a>
        </h2>
        <a href={downloadURL(issue)} className="downloadLink">
          <span className="material-icons" aria-hidden>
            cloud_download
          </span>
          Download as PDF
        </a>
        {issue.Releases ? (
          <div>
            <h3>Releases</h3>
            <ul>
              {issue.Releases.map(release => {
                return <li key={release}>{release}</li>;
              })}
            </ul>
          </div>
        ) : null}
        {issue.Tutorials ? (
          <div>
            <h3>Tutorials</h3>
            <ul className="tutorials">
              {issue.Tutorials.map(tutorial => {
                return <Tutorial tutorial={tutorial} key={tutorial.name} />;
              })}
            </ul>
          </div>
        ) : null}
        {issue.Updates ? (
          <div>
            <h3>Updates</h3>
            This issue contains info/updates on the following Phaser-related
            systems/plugins/features/projects:
            <ul>
              {issue.Updates.map(update => {
                return <li key={update}>{update}</li>;
              })}
            </ul>
          </div>
        ) : null}
      </main>
    );
  }
}

export default withNewsletter(NewsletterView);
