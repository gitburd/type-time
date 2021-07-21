import React from 'react'
import "./Tool.css"
import { useSelector, shallowEqual } from 'react-redux';
const WPM = ({ count }) => {
    const {
        totalWordCount,
        currentWordCount,
        timer
    } = useSelector(state => ({
        totalWordCount: state.test.totalWordCount,
        currentWordCount: state.test.currentWordCount,
        timer: state.test.timer
    }), shallowEqual);

    let wc = totalWordCount + currentWordCount

    return (
        <div>
            {/* {count} */}
            <h2>{count && count !== timer && Math.floor(60 * (wc / count))}W/M</h2>
        </div>
    )
}

export default WPM
