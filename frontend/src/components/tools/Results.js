import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import WPM from './WPM'

const Results = ({ count }) => {
    const {
        results
    } = useSelector(state => ({
        results: state.test.results
    }), shallowEqual);

    const { category, timer, totalWordCount } = results || {};

    return (
        <div>
            <WPM count={count} />
            {results && Object.keys(results).length > 0 && <div>
                <ul>
                    <li>Word Count: {totalWordCount}</li>
                    <li>Timer: {timer} seconds</li>
                    <li>Category: {category.value}</li>
                </ul>
            </div>}
        </div>
    )
}

export default Results
