import React, { useState } from 'react'
import "./Tool.css"
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import useInterval from './useInterval'
import { setWordCount, getFirstRandomText, getRandomText, createTestRecod, reset } from '../../store/actions/testActions'
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
        if (count === timer - 1) {
            console.log("END TIMER LOGiC HERE!")
            dispatch(createTestRecod())
        }
        setCount(count + 1);
    }, isRunning && count < timer ? delay : null);


    function handleStopTimer() {
        dispatch(reset())
        setCount(0);
        setIsRunning(false);
    }

    function handleStartTimer() {
        // dispatch(reset())
        dispatch(getFirstRandomText())
        setCount(0);
        setIsRunning(true);
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
            <WPM count={count} isRunning={isRunning} />
        </div>
    );
}

export default Timer
