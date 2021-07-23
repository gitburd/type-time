import React, { useState } from 'react'
import Timer from './Timer'
import Help from './Help'
import Results from './Results'
import Settings from './Settings'

const Tools = () => {
    const [toolTab, setToolTab] = useState("Results")
    const onTabClick = (e) => {
        e.preventDefault()
        setToolTab(e.target.id)
    }
    const [count, setCount] = useState(0);

    return (
        <div className="tools">
            <Timer count={count} setCount={setCount} />
            <div className="tools-tab-container">
                <ul className="tools-tab">
                    <li className={toolTab === "Results" ? "active" : ""} id="Results" onClick={e => onTabClick(e)}>Results</li>
                    <li className={toolTab === "Settings" ? "active" : ""} id="Settings" onClick={e => onTabClick(e)}>⚙️</li>
                </ul>
                {toolTab === "Settings" && <Settings />}
                {toolTab === "Results" && <Results count={count} />}
            </div>
            <Help />
        </div>
    )
}

export default Tools
