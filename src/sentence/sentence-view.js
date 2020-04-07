import Speak from './../speak'
import React from 'react';
import { observer } from 'mobx-react'

import Sentence from './sentence';

const SentenceView = observer((props) => (
    <span>{Sentence.toString()} <button onClick={() => Speak(Sentence.toString())}>READ</button></span>
))

export default SentenceView;