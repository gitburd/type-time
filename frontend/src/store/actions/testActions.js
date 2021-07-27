import axios from 'axios'

export const setUserInput = (input) => {
    return (dispatch, getState) => {
        const testState = getState().test
        const { text } = testState
        const currentKey = !text.content || input.length >= text.content.length ?
            "" : text.content[input.length] === " " ?
                "spacebar" : text.content[input.length]
        const formattedInput = input.replace(/\s+/g, ' ').trim();
        let cwc = formattedInput.split(" ").length;

        let correctKeys = 0
        let looplen = Math.min(text.content.length, input.length)
        for (let i = 0; i < looplen; i++) {
            if (text.content[i] === input[i]) {
                correctKeys++;
            }
        }

        dispatch({
            type: 'SET_USER_INPUT',
            input,
            currentWordCount: cwc,
            currentKey,
            currentKeyCount: input.length || 0,
            currentCorrectKeyCount: correctKeys
        })
    }
}

export const updateTotalCounts = () => {
    return (dispatch, getState) => {
        const testState = getState().test
        const {
            totalWordCount,
            currentWordCount,
            totalKeyCount,
            currentKeyCount,
            totalCorrectKeyCount,
            currentCorrectKeyCount } = testState

        dispatch({
            type: 'SET_TOTALS',
            totalWordCount: totalWordCount || 0 + currentWordCount || 0,
            totalKeyCount: totalKeyCount || 0 + currentKeyCount || 0,
            totalCorrectKeyCount: totalCorrectKeyCount || 0 + currentCorrectKeyCount || 0
        })
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
        // const url = "https://turbotype.herokuapp.com/api/text/333"
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
        // const url = "https://turbotype.herokuapp.com/api/text/333"
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

export const setShowKeyboard = (showKeyboard) => {
    return (dispatch) => {
        dispatch({ type: 'SET_SHOW_KEYBOARD', showKeyboard })
    }
}

export const setRequireAccuracy = (requireAccuracy) => {
    return (dispatch) => {
        dispatch({ type: 'SET_REQUIRE_ACCURACY', requireAccuracy })
    }
}

export const createTestRecod = () => {
    return (dispatch, getState) => {
        const testState = getState().test
        const {
            totalWordCount,
            totalCorrectKeyCount,
            totalKeyCount,
            currentCorrectKeyCount,
            currentKeyCount,
            currentWordCount,
            timer,
            category
        } = testState

        let total = totalWordCount || 0
        const wordsPerMin = Math.floor(60 * ((total + currentWordCount) / timer.value))
        const accuracy = ((totalCorrectKeyCount || 0 + currentCorrectKeyCount || 0) /
            (totalKeyCount || 0 + currentKeyCount || 0))

        const results = {
            user_id: 1,
            totalWordCount: total + currentWordCount,
            timer: timer.value,
            category: category.value,
            wordsPerMin,
            accuracy
        }
        axios.post('https://turbotype.herokuapp.com/api/test', results)
            .then(response => {
                console.log("SUCCESS", response)

            }).catch(error => {
                console.log(error)
            })
        results.category = category
        dispatch({ type: 'SET_TEST_RESULTS', results })
    }
}

export const deleteTestRecord = (testId) => {
    axios.delete(`https://turbotype.herokuapp.com/api/test/${testId}`)
        .then(response => {
            console.log("SUCCESS", response)
        }).catch(error => {
            console.log(error)
        })
}

export const reset = () => {
    return (dispatch) => {
        dispatch({ type: 'RESET' })
    }
}

