import React from 'react'

const TestRecord = ({ test }) => {
    console.log("hello?", test)
    const { category, timer, totalWordCount } = test || {};
    return (
        <div>
            <ul>
                <li>Word Count: {totalWordCount}</li>
                <li>Timer: {timer} seconds</li>
                <li>Category: {category.value}</li>
            </ul>
        </div>
    )
}

export default TestRecord;