import { combineReducers } from 'redux'
import testReducer from './testReducer'
import userReducer from './userReducer'
import themeReducer from './themeReducer'

const rootReducer = combineReducers({
    test: testReducer,
    user: userReducer,
    theme: themeReducer
});

export default rootReducer;
