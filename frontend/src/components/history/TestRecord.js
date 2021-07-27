import React, { useEffect, useRef } from 'react'
import { deleteTestRecord } from '../../store/actions/testActions'

const TestRecord = ({ test, highest, showDelete }) => {
    const { create_date, category, timer, wordsPerMin, accuracy } = test || {};
    let reg = /^\w+,\s\d+\s\w+(?!\d{4})/g
    const formatedDate = create_date ? create_date.match(reg) : ""
    const percentAccuracy = Math.floor(accuracy * 100)

    const onDelClick = () => {
        deleteTestRecord(test.id)
    }

    return (
        <tr>
            {showDelete && <td id="del-icon" onClick={onDelClick}>🗑️</td>}
            <td>{wordsPerMin === highest && <span>✨ </span>}{formatedDate}</td>
            <td>{wordsPerMin}</td>
            <td>{percentAccuracy}%</td>
            <td>{timer} sec.</td>
            <td>{category}</td>
        </tr>
    )
}

export default TestRecord;