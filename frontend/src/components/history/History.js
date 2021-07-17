import React from 'react'
import TestResultChart from './TestResultChart'
import TestResultGraph from './TestResultGraph'
import Achievements from './Achievements'
import './history.css'


const History = () => {
    return (
        <section className="history">
            <div className="history-card">
                <TestResultChart />
                <TestResultGraph />
            </div>
            <Achievements />
        </section>
    )
}

export default History
