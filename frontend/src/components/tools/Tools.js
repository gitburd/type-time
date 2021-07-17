import React from 'react'
import Timer from './Timer'
import Help from './Help'
import WPM from './WPM'

const Tools = () => {
    return (
        <div className="tools">
            <Help />
            <Timer />
            <WPM />
        </div>
    )
}

export default Tools
