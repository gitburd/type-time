import React, { useState } from 'react'
import Timer from './Timer'
import Help from './Help'
import Results from './Results'
import Settings from './Settings'

const Tools = () => {
    const [toolTab, setToolTab] = useState("Settings")
    const onTabClick = (e) => {
        e.preventDefault()
        setToolTab(e.target.id)
    }

    return (
        <div className="tools">
            <Timer />
            <div className="tools-tab-container">
                <ul className="tools-tab">
                    <li className={toolTab === "Results" ? "active" : ""} id="Results" onClick={e => onTabClick(e)}>Results</li>
                    <li className={toolTab === "Help" ? "active" : ""} id="Help" onClick={e => onTabClick(e)}>Help</li>
                    <li className={toolTab === "Settings" ? "active" : ""} id="Settings" onClick={e => onTabClick(e)}>⚙️</li>
                </ul>

                {toolTab === "Help" && <Help />}
                {toolTab === "Settings" && <Settings />}
                {toolTab === "Results" && <Results />}
            </div>

        </div>
    )
}

export default Tools
