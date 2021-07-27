import React, { useEffect, useRef } from 'react'
import { useSelector, shallowEqual } from 'react-redux';

import TestRecord from './TestRecord'
const TestResultChart = ({ showDelete, setShowDelete }) => {
    const {
        tests
    } = useSelector(state => ({
        tests: state.user.tests
    }), shallowEqual);

    let highest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < tests.length; i++) {
        if (tests[i].wordsPerMin > highest) {
            highest = tests[i].wordsPerMin;
        }
    }

    const handleClick = e => {
        if (table.current && table.current.contains(e.target)) {
            return;
        }
        if (e.target.id === "delete-record") return;
        setShowDelete(false)
    };

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const table = useRef();

    const tableBody = tests && tests.length > 0 ? tests.map(test => {
        return <TestRecord key={test.id} test={test} highest
            ={highest} showDelete={showDelete} />
    }) : <tr>
        <td colSpan="4"> Nothing yet</td>
    </tr>
    if (!tests || tests.length === 0) {
        return (<div></div>)
    }

    return (
        <div style={{ margin: "0 2em" }}>
            <table ref={table} className="table">
                <thead>
                    <tr>
                        {showDelete && <th>DELETE</th>}
                        <th>Date</th>
                        <th>W/M</th>
                        <th>Accuracy</th>
                        <th>Time</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
        </div>
    )
}

export default TestResultChart
