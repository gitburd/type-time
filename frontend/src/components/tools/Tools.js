import React, { useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Timer from './Timer'
import Help from './Help'
import Results from './Results'
import Settings from './Settings'
import WPM from './WPM'

const Tools = () => {
    // const [toolTab, setToolTab] = useState("Results")
    // const onTabClick = (e) => {
    //     e.preventDefault()
    //     setToolTab(e.target.id)
    // }
    const [count, setCount] = useState(0);
    const {
        showKeyboard,
        results
    } = useSelector(state => ({
        showKeyboard: state.test.showKeyboard,
        results: state.test.results
    }), shallowEqual);

    return (
        <div className="tools">
            <Timer count={count} setCount={setCount} />
            <div className="wpm">
                <WPM count={count} />
            </div>
            {showKeyboard && <Help />}
        </div>
    )
}

export default Tools
