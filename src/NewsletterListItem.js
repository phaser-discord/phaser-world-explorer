import React, {
    Component
} from 'react';
import { Link } from 'react-router-dom'

class NewsletterListItem extends Component {
    render() {
        return (
            <li className="List-item">
                <h2><Link to={`${this.props.issue}`}>Issue {this.props.issue}</Link></h2>
            </li>
        );
    }
}

export default NewsletterListItem;