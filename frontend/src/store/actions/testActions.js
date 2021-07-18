import axios from 'axios'

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

export const getText = () => {
    return (dispatch) => {
        axios.get('https://turbotype.herokuapp.com/api/text/random')
            .then(response => {
                console.log("SUCCESS", response)
                dispatch({ type: 'SET_TEXT', text: response })
            }).catch(error => {
                console.log(error)
            })
    }
}