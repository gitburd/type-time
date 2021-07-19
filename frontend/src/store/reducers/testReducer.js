import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initState = {
    timer: 30,
    input: "",
    text: "",
    totalWordCount: 0,
    currentWordCount: 0
}

const testReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USER_INPUT":
            return {
                ...state,
                input: action.input,
                currentWordCount: action.currentWordCount
            }
        case "SET_TIMER":
            return {
                ...state,
                timer: action.timer
            }
        case "SET_TEXT":
            return {
                ...state,
                text: action.text,
                input: ""
            }
        case "SET_TOTAL_WC":
            return {
                ...state,
                totalWordCount: action.totalWordCount,
                currentWordCount: 0
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


