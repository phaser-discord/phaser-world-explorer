import React, {
    Component
} from 'react';

class NewsletterListItem extends Component {
    render() {
        return (
            <li className="List-item">
                <h2>Issue {this.props.issue}</h2>
            </li>
        );
    }
}

export default NewsletterListItem;