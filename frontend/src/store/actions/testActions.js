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

export const setTime = (time) => {
    return (dispatch) => {
        dispatch({ type: 'SET_TIME', time })
    }
}

export const resetTime = () => {
    return (dispatch) => {
        dispatch({ type: 'RESET_TIME' })
    }
}