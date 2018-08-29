import React, {
    Component
} from 'react';
import './NewsletterList.css';
import NewsletterListItem from './NewsletterListItem'
import { withNewsletter } from './NewsletterContext'

class NewsletterList extends Component {
    render() {
        const { isLoaded, items } = this.props.newsletter
        if (!isLoaded) {
            return null
        }

        return (
            <div className="List-view">
                <ul>
                    {items.map(item => {
                        return <NewsletterListItem key={item.Issue || Math.random()} issue={item.Issue || null} />
                    })}
                </ul>
            </div>
        );
    }
}

export default withNewsletter(NewsletterList)