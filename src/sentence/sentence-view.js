import Speak from './../speak'
import Sentence from './sentence';
import React from 'react';
import { observer } from 'mobx-react';
import PrimaryButton from '../components/primary-button';

const SentenceView = observer((props) => (
    <div>
        {Sentence.toString()}
        <br />
        <br />
        <PrimaryButton onClick={() => Speak(Sentence.toString())}>
            READ
        </PrimaryButton>
    </div>
))

export default SentenceView;
