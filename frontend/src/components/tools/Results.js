import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';

const Results = () => {
    const {
        results
    } = useSelector(state => ({
        results: state.test.results
    }), shallowEqual);

    const { category, timer, totalWordCount, accuracy, wordsPerMin } = results || {};
    const percentAccuracy = Math.floor(accuracy * 100)
    return (
        <div>
            {results && Object.keys(results).length > 0 && <div>
                <h2>Results</h2>
                <ul>
                    <li>Words/Minute: {wordsPerMin}</li>
                    <li>Accuracy: {percentAccuracy}%</li>
                    <li>Word Count: {totalWordCount}</li>
                    <li>Timer: {timer} seconds</li>
                    <li>Category: {category.value}</li>
                </ul>
            </div>}
        </div>
    )
}

export default Results
