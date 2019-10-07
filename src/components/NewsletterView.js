import React from 'react'


import { withNewsletter } from '../util/NewsletterContext'

import './NewsletterView.css'

const downloadURL = item =>
    `https://phaser.io/images/newsletter/pdf/issue${item.Issue}.pdf`

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
                <h2><a href={issue.Link} target="_blank" rel="noopener noreferrer">Phaser World Issue {issue.Issue}</a></h2>
                <h5 style={{ paddingLeft: '10px' }}>Download as PDF <a href={downloadURL(issue)}>here</a>.</h5>
                {issue.Releases ?
                    <div>
                        <h3>Releases</h3>
                        <ul>{issue.Releases.map(release => {
                            return <li key={release}>{release}</li>
                        })}
                        </ul>
                    </div>
                    : null
                }
                {issue.Tutorials ?
                    <div>
                        <h3>Tutorials</h3>
                        <ul>{issue.Tutorials.map(tutorial => {
                            return <li key={tutorial.name}>
                                <h4>{tutorial.name}</h4>
                                <p>{tutorial.desc}</p>
                                <p>For Phaser {tutorial.version === "v2" ? '2/CE' : '3'}</p>
                                <p><a href={tutorial.link} target="_blank" rel="noopener noreferrer">Read more on phaser.io</a></p>
                                {tutorial.directlink ? <p><a href={tutorial.directlink} target="_blank" rel="noopener noreferrer">Go directly to site</a></p> : null}
                            </li>
                        })}
                        </ul>
                    </div>
                    : null
                }
                {issue.Updates ?
                    <div>
                        <h3>Updates</h3>
                        This issue contains info/updates on the following Phaser-relared systems/plugins/features/projects:
                    <ul>{issue.Updates.map(update => {
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