import React from 'react';

import Card from './Card';
import Tutorial from './Tutorial';
import { withNewsletter } from '../util/NewsletterContext';

import './NewsletterView.css';

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

    const issueNumber = Number(this.props.match.params.issue);
    return items.find(i => i.issueNumber === issueNumber);
  }

  render() {
    const issue = this.currentIssue();
    if (!issue) {
      return null;
    }
    this.props.history.listen(stuff =>
      this.issueRef.current ? this.issueRef.current.focus() : null
    );

    const dateFormatted = new Intl.DateTimeFormat('en-US', {
      // Request only month and year, since the day is not stored
      month: 'short',
      year: 'numeric'
    }).format(issue.date);

    return (
      <main className="Issue-view">
        <h2>
          <a
            href={issue.directLink}
            target="_blank"
            rel="noopener noreferrer"
            ref={this.issueRef}
          >
            Phaser World Issue {issue.issueNumber} ({dateFormatted})
          </a>
        </h2>
        <a href={issue.downloadLink} className="downloadLink">
          <span className="material-icons" aria-hidden>
            cloud_download
          </span>
          Download as PDF
        </a>
        {issue.releases ? (
          <div>
            <h3>Releases</h3>
            <ul>
              {issue.releases.map(release => {
                return <li key={release}>{release}</li>;
              })}
            </ul>
          </div>
        ) : null}
        {issue.tutorials ? (
          <div>
            <h3>Tutorials</h3>
            <ul className="tutorials">
              {issue.tutorials.map(tutorial => {
                return <Tutorial tutorial={tutorial} key={tutorial.name} />;
              })}
            </ul>
          </div>
        ) : null}
        {issue.updates ? (
          <div>
            <h3>Updates</h3>
            This issue contains info/updates on the following Phaser-related
            systems/plugins/features/projects:
            <ul className="updates">
              {issue.updates.map(update => {
                return (
                  <li key={update}>
                    <Card content={update} />
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </main>
    );
  }
}

export default withNewsletter(NewsletterView);
