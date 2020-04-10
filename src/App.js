import React, { Component } from 'react';
import WordList from './sentence/word-list';
import SentenceView from './sentence/sentence-view';

class App extends Component {

  render(){
    return (
      <div className="container">
        <WordList />
        <br />
        <h2>The sentence is:</h2>
        <SentenceView />
      </div>
    )
  }

}

export default App;