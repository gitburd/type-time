import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import TestResultChart from './TestResultChart'
import TestResultGraph from './TestResultGraph'
import { getUserTests } from '../../store/actions/userActions'
import './history.css'

const History = ({ showDelete, setShowDelete }) => {
    const {
        tests
    } = useSelector(state => ({
        tests: state.user.tests
    }), shallowEqual);
    const header = tests && tests.length > 0 ? <h2>Test Records</h2> : <h2>No Results Yet</h2>
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserTests())
    }, [])
    console.log(tests)


    return (
        <section className="history right">
            <div>
                {header}
                {tests && tests.length > 2 && <TestResultGraph />}
                <TestResultChart showDelete={showDelete} setShowDelete={setShowDelete} />
            </div>
        </section>
    )
}

export default History
