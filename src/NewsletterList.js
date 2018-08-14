import React, {
    Component
} from 'react';
import NewsletterListItem from './NewsletterListItem'

class NewsletterList extends Component {
    render() {
        return (
            <div className="List">
                <ul>
                    {this.props.listItems.map(item => {
                        return <NewsletterListItem key={item.Issue || Math.random()} issue={item.Issue || null} />
                    })}
                </ul>
            </div>
        );
    }
}

export default NewsletterList;