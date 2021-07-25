import React from 'react'

const TestRecord = ({ test, highest }) => {
    const { create_date, category, timer, wordsPerMin, accuracy } = test || {};
    let reg = /^\w+,\s\d+\s\w+(?!\d{4})/g
    const formatedDate = create_date ? create_date.match(reg) : ""

    return (
        <tr>
            <td>{wordsPerMin === highest && <span>✨ </span>}{formatedDate}</td>
            <td>{wordsPerMin}</td>
            <td>{accuracy}</td>
            <td>{timer} sec.</td>
            <td>{category}</td>
        </tr>
    )
}

export default TestRecord;