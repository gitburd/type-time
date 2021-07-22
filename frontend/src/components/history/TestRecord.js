import React from 'react'

const TestRecord = ({ test }) => {
    console.log("hello?", test)
    const { create_date, category, timer, totalWordCount, wordsPerMin } = test || {};
    return (
        <tr>
            <td>{create_date}</td>
            <td>{wordsPerMin}</td>
            <td>{category.value}</td>
            <td>{totalWordCount}</td>
            <td>{timer} seconds</td>
        </tr>
    )
}

export default TestRecord;