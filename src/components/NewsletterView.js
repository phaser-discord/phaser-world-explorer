import React from 'react'

import { withNewsletter } from '../util/NewsletterContext'

import './NewsletterView.css'

const downloadURL = item =>
    `https://phaser.io/images/newsletter/pdf/issue${item.Issue}.pdf`

const Tutorial = ({ tutorial }) => {
    return (
        <li className="tutorial">
            <h4 className="title">{tutorial.name}</h4>
            <div className="content">
                <p>{tutorial.desc}</p>
                <p>For Phaser {tutorial.version === "v2" ? '2/CE' : '3'}</p>
            </div>
            <div className="links">
                <a href={tutorial.link} target="_blank" rel="noopener noreferrer">Read more on phaser.io</a>
                <a href={tutorial.directlink} target="_blank" rel="noopener noreferrer">Go directly to site</a>
            </div>
        </li>
    );
}

class NewsletterView extends React.Component {
    currentIssue() {
        const { isLoaded, items } = this.props.newsletter
        if (!isLoaded) {
            return null
        }

        const issueNo = Number(this.props.match.params.issue)
        return items.find(i => i.Issue === issueNo)
    }

    render() {
        const issue = this.currentIssue()
        if (!issue) {
            return null
        }

        return (
            <div className="Issue-view">
                <h2>
                    <a href={issue.Link} target="_blank" rel="noopener noreferrer">Phaser World Issue {issue.Issue}</a>
                </h2>
                <a href={downloadURL(issue)} className="downloadLink">Download as PDF</a>
                {issue.Releases ?
                    <div>
                        <h3>Releases</h3>
                        <ul>
                            {issue.Releases.map(release => {
                                return <li key={release}>{release}</li>
                            })}
                        </ul>
                    </div>
                    : null
                }
                {issue.Tutorials ?
                    <div>
                        <h3>Tutorials</h3>
                        <ul className="tutorials">
                            {issue.Tutorials.map(tutorial => {
                                return <Tutorial tutorial={tutorial} key={tutorial.name} />
                            })}
                        </ul>
                    </div>
                    : null
                }
                {issue.Updates ?
                    <div>
                        <h3>Updates</h3>
                        This issue contains info/updates on the following Phaser-related systems/plugins/features/projects:
                        <ul>
                            {issue.Updates.map(update => {
                                return <li key={update}>{update}</li>
                            })}
                        </ul>
                    </div>
                    : null
                }
            </div>
        );
    }
}

export default withNewsletter(NewsletterView)