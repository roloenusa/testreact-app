import React, { Component } from 'react';
import WordList from './../sentence/word-list';
import SentenceView from './../sentence/sentence-view';

class SentenceComponent extends Component {
    render() {
        return (
            <div>
                <WordList />
                <br />
                <h2>The sentence is:</h2>
                <SentenceView />
            </div>
        );
    }
}

export default SentenceComponent;