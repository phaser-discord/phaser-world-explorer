import React from 'react'
import './NewsletterView.css'

import { withNewsletter } from './NewsletterContext'

class NewsletterView extends React.Component {
    currentIssue() {
        const { isLoaded, items } = this.props.newsletter
        if (!isLoaded) {
            return null
        }

        const issueNo = Number(this.props.match.params.issue)
        // TODO: needs polyfill for IE
        return items.find(i => i.Issue === issueNo)
    }

    render() {
        const issue = this.currentIssue()
        if (!issue) {
            return null
        }

        return (
            <div className="Issue-view">
                <h2><a href={issue.Link} target="_blank" rel="noopener">Phaser World Issue {issue.Issue}</a></h2>
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
                                <p><a href={tutorial.link} target="_blank" rel="noopener">Link</a></p>
                                {tutorial.directlink ? <p><a href={tutorial.directlink} target="_blank" rel="noopener">Direct Link</a></p> : null}
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