import React from 'react'
import "./Tool.css"
import { useSelector, shallowEqual } from 'react-redux';
const WPM = ({ count }) => {
    const {
        totalWordCount,
        currentWordCount,
        timer,
        results
    } = useSelector(state => ({
        totalWordCount: state.test.totalWordCount,
        currentWordCount: state.test.currentWordCount,
        timer: state.test.timer,
        results: state.test.results
    }), shallowEqual);

    let wc = results && results.wordsPerMin ?
        results.wordsPerMin : count ?
            Math.floor(60 * ((totalWordCount + currentWordCount) / count)) :
            0

    return <h2>{wc} Words/Minute</h2>
}

export default WPM
