import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import TestResultChart from './TestResultChart'
import TestResultGraph from './TestResultGraph'
import './history.css'

const History = () => {
    const {
        tests
    } = useSelector(state => ({
        tests: state.user.tests
    }), shallowEqual);
    const header = tests && tests.length > 0 ? <h2>Test Records</h2> : <h2>No Results Yet</h2>
    return (
        <section className="history right">

            <div>
                {header}
                <TestResultGraph />
                <TestResultChart />
            </div>
        </section>
    )
}

export default History
