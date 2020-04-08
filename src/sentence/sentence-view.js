import Speech from 'speak-tts'
import Speak from './../speak'
import React from 'react';
import { observer } from 'mobx-react'

import Sentence from './sentence';


function isSupported() {
    const speech = new Speech();
    if(speech.hasBrowserSupport()) { // returns a boolean
        console.log("speech synthesis supported")
        return true;
    }
    return false;
}

const SentenceView = observer((props) => (
<span>{Sentence.toString()} <button onClick={() => Speak(Sentence.toString())}>READ {isSupported() ? 'YES' : 'NO'}</button></span>
))

export default SentenceView;