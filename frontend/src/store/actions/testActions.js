export const setUserInput = (input) => {
    return (dispatch) => {
        dispatch({ type: 'SET_USERINPUT', input })
    }
}

export const setTimer = (timer) => {
    return (dispatch) => {
        dispatch({ type: 'SET_TIMER', timer })
    }
}

export const startTimer = () => {
    return (dispatch) => {
        let startTime = new Date()
        setInterval(() => {
            let newTime = Math.floor((new Date() - startTime) / 1000)
            dispatch({ type: 'SET_TIME', time: newTime })
        }, 1000)
    }
}

export const resetTime = () => {
    return (dispatch) => {
        dispatch({ type: 'RESET_TIME' })
    }
}