import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getUserTests } from '../../store/actions/userActions'
import TestRecord from './TestRecord'
const TestResultChart = () => {
    const {
        results,
        tests
    } = useSelector(state => ({
        results: state.test.results,
        tests: state.user.tests
    }), shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserTests())
    }, [])


    const tableBody = tests && tests.length > 0 ? tests.map(test => {
        return <TestRecord key={test.id} test={test} />
    }) : <tr>
        <td colSpan="4"> Nothing yet</td>
    </tr>
    return (
        <div style={{ margin: "3em" }}>
            <table class="table">
                <thead>
                    <tr>
                        <th colSpan="5" style={{ textAlign: "center", fontSize: '1.3em' }}>Past Test Results</th>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <th>W/M</th>
                        <th>Words</th>
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
