// src/messages/message-list.js

import React, { Component } from 'react';
import WordView from './word-view';

class WordList extends Component {

    state = {
        words: [
            "I",
            "House",
            "Run",
            "Red",
            "Fast",
            "Mary",
            "Jumps",
            "Happy",
            "Is",
        ]
    }


    render() {
        const wordViews = this.state.words.map((entry, index) => <WordView key={index} word={entry} />);

        return (
          <div>
            <h1>List of Words</h1>
            <div className='btn-group btn-group-toggle'>
                { wordViews }
            </div>
          </div>
        )
    }
}

export default WordList;