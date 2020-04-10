import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SentenceComponent from './sentence/sentence-component';
import MessageList from './messages/message-list';

class App extends Component {

  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <Route path="/" exact component={home} />
          <Route path="/message-list" exact component={MessageList} />
          <Route path="/sentence"  component={SentenceComponent} />
        </BrowserRouter>
        <br />
        <br />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sentence">Sentence</a></li>
            <li><a href="/message-list">Message List</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

const home = () => (
  <Fragment>
    <h1>Welcome!</h1>
  </Fragment>
);

export default App;