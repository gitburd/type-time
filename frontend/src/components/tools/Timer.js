import React, { useState } from 'react'
import "./Tool.css"
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { startTimer, resetTime } from '../../store/actions/testActions';

const Timer = () => {
    const {
        timer,
        time
    } = useSelector(state => ({
        timer: state.test.timer,
        time: state.test.time
    }), shallowEqual);
    const dispatch = useDispatch();
    // const onGoClick = () => {
    //     console.log("click")
    //     dispatch(startTimer(timer))
    // }

    const onResetClick = () => {
        console.log("click")
        dispatch(resetTime())
    }

    const startTimer = () => {
        let startTime = new Date()
        let counter = 0;
        let interv = setInterval(() => {
            if (counter === timer - 1) {
                clearInterval(interv)
            }
            let newTime = Math.floor((new Date() - startTime) / 1000)
            counter++;
            dispatch({ type: 'SET_TIME', time: newTime })
        }, 1000)
    }

    return (
        <div className="timer-container">
            <div className="timer glow-timer">
                {timer - time}
            </div>
            <div className="timer-container-footer">
                <button onClick={startTimer}>GO!</button>
                <button onClick={onResetClick}>✖️</button>
            </div>
        </div>
    )
}

export default Timer
