import React, {
    Component
} from 'react';
import './NewsletterList.css';
import NewsletterListItem from './NewsletterListItem'

class NewsletterList extends Component {
    render() {
        return (
            <div className="List-view">
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