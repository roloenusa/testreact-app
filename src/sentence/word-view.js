// src/messages/message-view.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sentence from '.././sentence/sentence';

class WordView extends Component {

  add(word) {
    Sentence.add(word);
    console.log(Sentence.toString());
  }

  render() {

    const word = this.props.word;

    return(
      <div className="container">
        <button onClick={() => this.add(word)}>{word}</button>
      </div>
    )
  }

}

// Mark message input parameter as required
WordView.propTypes = {
  message: PropTypes.object.isRequired
}

export default WordView;
