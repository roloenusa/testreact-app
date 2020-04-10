// src/messages/message-view.js

import React, { Component } from 'react';
import Speech from 'speak-tts';
import PropTypes from 'prop-types';
import PrimaryButton from './../components/primary-button';

const speech = new Speech()
speech.init().then((data) => {
    // The "data" object contains the list of available voices and the voice synthesis params
    console.log("Speech is ready, voices are available", data)
}).catch(e => {
    console.error("An error occured while initializing : ", e)
})

class MessageView extends Component {

  speak(text) {
    speech.speak({
        text,
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    })
  }

  render() {

    const message = this.props.message;

    return(
      <div className="container">
        <div className="from">
          <span className="label">From: </span>
          <span className="value">{message.from}</span>
        </div>
        <div className="status">
          <span className="label">Status: </span>
          <span className="value">{message.status}</span>
        </div>
        <div className="message">
          <span className="label">Message: </span>
          <span className="value">{message.message}</span>
        </div>
        <div>
          <PrimaryButton onClick={() => this.speak(message.message)}>
            Read
          </PrimaryButton>
        </div>
      </div>
    )
  }

}

// Mark message input parameter as required
MessageView.propTypes = {
  message: PropTypes.object.isRequired
}

export default MessageView;
