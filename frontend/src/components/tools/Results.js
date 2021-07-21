import React, { useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux';
const Results = () => {
    const {
        results
    } = useSelector(state => ({
        results: state.test.results
    }), shallowEqual);

    // useEffect(() => { console.log("ue") }, [results]);
    const { category, timer, totalWordCount, wordsPerMin } = results || {};
    // console.log("results?", results)
    return (
        <div>
            {results && Object.keys(results).length > 0 && <div>
                <ul>
                    <li>Words Per Minute:{wordsPerMin}</li>
                    <li>Word Count: {totalWordCount}</li>
                    <li>Timer: {timer}</li>
                    <li>Category: {category}</li>
                </ul>
            </div>}
        </div>
    )
}

export default Results
