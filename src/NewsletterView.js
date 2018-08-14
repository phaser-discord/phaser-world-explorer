import React, {
    Component
} from 'react';
import './NewsletterView.css';

class NewsletterView extends Component {
    currentIssue() {
        let current = null
        this.props.issues.forEach(issue => {
            if (issue.Issue === parseInt(this.props.match.params.issue, 10)) {
                current = issue;
            }
        });
        return current;
    }

    render() {
        return (
            <div className="Issue-view">
                <h2><a href={this.currentIssue().Link} target="_blank" rel="noopener">Phaser World Issue {this.currentIssue().Issue}</a></h2>
                {this.currentIssue().Releases ?
                    <div>
                        <h3>Releases</h3>
                        <ul>{this.currentIssue().Releases.map(release => {
                            return <li key={release}>{release}</li>
                        })}
                        </ul>
                    </div>
                    : null
                }
                {this.currentIssue().Tutorials ?
                    <div>
                        <h3>Tutorials</h3>
                        <ul>{this.currentIssue().Tutorials.map(tutorial => {
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
                {this.currentIssue().Updates ?
                    <div>
                        <h3>Updates</h3>
                        This issue contains info/updates on the following Phaser-relared systems/plugins/features/projects:
                    <ul>{this.currentIssue().Updates.map(update => {
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

export default NewsletterView;