import axios from 'axios'

export const setUserInput = (input) => {
    return (dispatch) => {
        const formattedInput = input.replace(/\s+/g, ' ').trim();
        let cwc = formattedInput.split(" ").length;
        dispatch({ type: 'SET_USER_INPUT', input, currentWordCount: cwc })
    }
}

export const updateTotalWordCount = () => {
    return (dispatch, getState) => {
        const twc = getState().test.totalWordCount
        const cwc = getState().test.currentWordCount
        dispatch({ type: 'SET_TOTAL_WC', totalWordCount: twc + cwc })
    }
}

export const setWordCount = (wordCount) => {
    return (dispatch) => {
        dispatch({ type: 'SET_TOTAL_WC', totalWordCount: wordCount })
    }
}


export const getRandomText = () => {
    return (dispatch) => {
        axios.get('https://turbotype.herokuapp.com/api/text/random')
            .then(response => {
                dispatch({ type: 'SET_TEXT', text: response.data })
            }).catch(error => {
                console.log(error)
            })
    }
}

export const setTimer = (timer) => {
    return (dispatch) => {
        dispatch({ type: 'SET_TIMER', timer })
    }
}
