import { combineReducers } from 'redux'
import textReducer from './textReducer'

const rootReducer = combineReducers({
    textReducer: textReducer
});

export default rootReducer;
