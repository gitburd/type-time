export const addCount = (count) => {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_COUNTER', count: count + 1 })
    }
}