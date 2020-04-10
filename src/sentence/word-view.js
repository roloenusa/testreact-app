// src/messages/message-view.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sentence from '.././sentence/sentence';
import WordButton from './../components/word-button';

class WordView extends Component {

  add(word) {
    Sentence.add(word);
    console.log(Sentence.toString());
  }

  render() {
    const word = this.props.word;
    return(
        <WordButton onClick={() => this.add(word)}>{word}</WordButton>
    )
  }

}

// Mark message input parameter as required
WordView.propTypes = {
  message: PropTypes.object.isRequired
}

export default WordView;
