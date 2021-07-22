import axios from 'axios'

export const getUserTests = () => {
    return (dispatch, getState) => {
        const userId = getState().user.id
        const url = `https://turbotype.herokuapp.com/api/user/${userId}/tests`
        axios.get(url)
            .then(response => {
                dispatch({ type: 'SET_USER_TESTS', tests: response.data.tests })
            }).catch(error => {
                console.log(error)
            })
    }
}

