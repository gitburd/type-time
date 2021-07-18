import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initState = {
    timer: 0,
    time: 0,
    input: ""
}

const testReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USERINPUT":
            return {
                ...state,
                input: action.input
            }
        case "SET_TIMER":
            return {
                ...state,
                timer: action.timer,
                time: 0
            }
        case "SET_TIME":
            return {
                ...state,
                time: action.time
            }
        case "RESET_TIME":
            return {
                ...state,
                time: 0
            }
        default:
            return state;
    }
}

const persistConfig = {
    key: 'test',
    storage: storage
};

export default persistReducer(persistConfig, testReducer);