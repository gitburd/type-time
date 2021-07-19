import React from 'react'
import "./Tool.css"
import { useSelector, shallowEqual } from 'react-redux';
const WPM = ({ count }) => {
    const {
        totalWordCount,
        currentWordCount
    } = useSelector(state => ({
        totalWordCount: state.test.totalWordCount,
        currentWordCount: state.test.currentWordCount
    }), shallowEqual);

    let wc = totalWordCount + currentWordCount

    return (
        <div>
            <h2>{count && Math.floor(60 * (wc / count))}W/M</h2>
        </div>
    )
}

export default WPM
