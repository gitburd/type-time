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

export const getRandomText = (category) => {
    return (dispatch) => {
        const url = category && category.dbLabel ? `https://turbotype.herokuapp.com/api/text/random?category=${category.dbLabel}` : `https://turbotype.herokuapp.com/api/text/random`
        axios.get(url)
            .then(response => {
                dispatch({ type: 'SET_TEXT', text: response.data })
            }).catch(error => {
                console.log(error)
            })
    }
}

export const getFirstRandomText = (category) => {
    return (dispatch) => {
        const url = category && category.dbLabel ? `https://turbotype.herokuapp.com/api/text/random?category=${category.dbLabel}` : `https://turbotype.herokuapp.com/api/text/random`
        axios.get(url)
            .then(response => {
                dispatch({ type: 'SET_FIRST_TEXT', text: response.data })
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

export const setCategory = (category) => {
    return (dispatch) => {
        dispatch({ type: 'SET_CATEGORY', category })
    }
}

export const createTestRecod = () => {
    return (dispatch, getState) => {
        const testState = getState().test
        const { totalWordCount, currentWordCount, timer, category } = testState
        // do we need the current?
        const wordsPerMin = Math.floor(60 * ((totalWordCount + currentWordCount) / timer))
        const results = {
            userId: 1,
            totalWordCount: totalWordCount + currentWordCount,
            timer: timer.value,
            category,
            wordsPerMin
        }
        dispatch({ type: 'SET_TEST_RESULTS', results })
    }
}

export const reset = () => {
    return (dispatch) => {
        dispatch({ type: 'RESET' })
    }
}