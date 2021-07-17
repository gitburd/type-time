import React from 'react'
import "./Tool.css"
import { useSelector, shallowEqual } from 'react-redux';
const WPM = () => {
    const {
        input,
        timer,
        time
    } = useSelector(state => ({
        input: state.test.input,
        timer: state.test.timer,
        time: state.test.time
    }), shallowEqual);
    console.log("input?", input.length)

    return (
        <div className="tool-card">
            <h1>{time > 0 && input.length > 0 && Math.floor(60 * (input.split(" ").length / time))} W/M</h1>
        </div>
    )
}

export default WPM
