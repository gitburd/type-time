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
    console.log("?", tests)
    return (
        <div>
            ...
            <h1>TestResultChart</h1>
            {tests && tests.length > 0 && tests.map(test => {
                return <TestRecord key={test.id} test={test} />
            })
            }
        </div>
    )
}

export default TestResultChart
