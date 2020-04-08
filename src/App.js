import React, { Component } from 'react';
import MessageList from './messages/message-list';
import WordList from './sentence/word-list';
import SentenceView from './sentence/sentence-view';

class App extends Component {

  render(){
    return (
      <div>
        {/* <MessageList /> */}
        <WordList />
        <br />
        The sentence is: <SentenceView />
      </div>
    )
  }

}

export default App;