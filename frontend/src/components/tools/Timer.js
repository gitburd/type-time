import React, { useState } from 'react'
import "./Tool.css"
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import useInterval from './useInterval'
import { setTime } from '../../store/actions/testActions'

const Timer = () => {
    const {
        timer
    } = useSelector(state => ({
        timer: state.test.timer
    }), shallowEqual);

    const [count, setCount] = useState(0);
    const delay = 1000;
    const [isRunning, setIsRunning] = useState(true);
    const dispatch = useDispatch();

    useInterval(() => {
        setCount(count + 1);
        dispatch(setTime((count + 1)))
    }, isRunning && count < timer ? delay : null);

    function handleStopTimer() {
        setIsRunning(false);
        setCount(0);
    }

    function handleStartTimer() {
        setIsRunning(true);
        setCount(0);
    }
    return (
        <div className="timer-container">
            <div className="timer glow-timer">
                {timer - count}
            </div>
            <div className="timer-container-footer">
                <button onClick={handleStartTimer}>GO!</button>
                <button onClick={handleStopTimer}>✖️</button>
            </div>
        </div>
    );
}

export default Timer
