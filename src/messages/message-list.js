// src/messages/message-list.js

import React, { Component } from 'react';
import MessageView from './message-view';

class MessageList extends Component {

    state = {
        messages: [
            {
                from: 'John',
                message: 'The event will start next week',
                status: 'unread'
            },
            {
                from: 'Martha',
                message: 'I will be traveling soon',
                status: 'read'
            },
            {
                from: 'Jacob',
                message: 'Talk later. Have a great day!',
                status: 'read'
            }
        ]
    }


    render() {
        const messageViews = this.state.messages.map((entry, index) => <MessageView key={index} message={entry} />);

        return (
            <div>
                <h1>List of Messages</h1>
                { messageViews }
            </div>
        )
    }
}

export default MessageList;