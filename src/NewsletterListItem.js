import React from 'react'
import { Link } from 'react-router-dom'

class NewsletterListItem extends React.Component {
    render() {
        return (
            <li className="List-item">
                <h2>
                    <Link to={`/newsletter/issue/${this.props.issue}`}>
                        Issue {this.props.issue}
                    </Link>
                </h2>
            </li>
        );
    }
}

export default NewsletterListItem;