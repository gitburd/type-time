import React, { useState } from 'react'
import "./Tool.css"
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import useInterval from './useInterval'
import { getFirstRandomText, createTestRecod, reset } from '../../store/actions/testActions'

const Timer = ({ count, setCount }) => {
    const {
        timer,
        category
    } = useSelector(state => ({
        timer: state.test.timer,
        category: state.test.category
    }), shallowEqual);

    const delay = 1000;
    const [isRunning, setIsRunning] = useState(false);
    const dispatch = useDispatch();

    useInterval(() => {
        if (count === timer.value - 1) {
            dispatch(createTestRecod())
        }
        setCount(count + 1);
    }, isRunning && count < timer.value ? delay : null);


    function handleStopTimer() {
        dispatch(reset())
        setCount(0);
        setIsRunning(false);
    }

    function handleStartTimer() {
        dispatch(getFirstRandomText(category))
        setCount(0);
        setIsRunning(true);
    }
    return (
        <div>
            <div className="timer-container">
                <div className="timer glow-timer"> {/*className="timer glow - timer"*/}
                    {timer.value - count}
                </div>
                <div className="timer-container-footer">
                    <button onClick={handleStartTimer}>▶️</button>
                    <button onClick={handleStopTimer}>⏹️</button>
                </div>
            </div >
        </div>
    );
}

export default Timer
