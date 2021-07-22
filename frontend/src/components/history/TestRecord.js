import React from 'react'

const TestRecord = ({ test }) => {
    console.log("hello?", test)
    const { create_date, category, timer, totalWordCount, wordsPerMin } = test || {};
    let reg = /^\w+,\s\d+\s\w+(?!\d{4})/g
    const formatedDate = create_date ? create_date.match(reg) : ""

    return (
        <tr>
            <td>{formatedDate}</td>
            <td>{wordsPerMin}</td>
            <td>{totalWordCount}</td>
            <td>{timer} sec.</td>
            <td>{category}</td>
        </tr>
    )
}

export default TestRecord;