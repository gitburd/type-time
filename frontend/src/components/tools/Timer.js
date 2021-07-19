import React, { useState } from 'react'
import "./Tool.css"
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import useInterval from './useInterval'
import { setWordCount } from '../../store/actions/testActions'
import WPM from './WPM'

const Timer = () => {
    const {
        timer
    } = useSelector(state => ({
        timer: state.test.timer
    }), shallowEqual);

    const [count, setCount] = useState(0);
    const delay = 1000;
    const [isRunning, setIsRunning] = useState(false);
    const dispatch = useDispatch();

    useInterval(() => {
        setCount(count + 1);
    }, isRunning && count < timer ? delay : null);


    function handleStopTimer() {
        setIsRunning(false);
        setCount(0);
        dispatch(setWordCount(0))
    }

    function handleStartTimer() {
        console.log("play click")
        setIsRunning(true);
        setCount(0);
    }
    return (
        <div>
            <div className="timer-container">
                <div className="timer glow-timer"> {/*className="timer glow - timer"*/}
                    {timer - count}
                </div>
                <div className="timer-container-footer">
                    <button onClick={handleStartTimer}>▶️</button>
                    <button onClick={handleStopTimer}>⏹️</button>
                </div>
            </div >
            <WPM count={count} />
        </div>
    );
}

export default Timer
