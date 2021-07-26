export const selectTheme = (selectedTheme) => {
    return (dispatch) => {
        dispatch({ type: 'SELECT_THEME', selectedTheme })
    }
}

