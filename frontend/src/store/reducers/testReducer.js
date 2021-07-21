import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initState = {
    timer: 15,
    input: "",
    text: "",
    totalWordCount: 0,
    currentWordCount: 0,
    results: {}
}

const testReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USER_INPUT":
            console.log("SET_USER_INPUT")
            return {
                ...state,
                input: action.input,
                currentWordCount: action.currentWordCount
            }
        case "SET_TIMER":
            console.log("SET_TIMER")
            return {
                ...state,
                timer: action.timer
            }
        case "SET_CATEGORY":
            console.log("SET_CATEGORY")
            return {
                ...state,
                category: action.category
            }
        case "SET_TEXT":
            console.log("SET_TEXT")
            return {
                ...state,
                text: action.text,
                input: ""
            }
        case "SET_FIRST_TEXT":
            console.log("SET_FIRTS_TEXT")
            return {
                ...state,
                text: action.text,
                input: "", textinput: "",
                totalWordCount: 0,
                currentWordCount: 0,
                results: {}
            }
        case "SET_TOTAL_WC":
            console.log("SET_TOTAL_WC")
            return {
                ...state,
                totalWordCount: action.totalWordCount,
                currentWordCount: 0
            }
        case "SET_TEST_RESULTS":
            console.log("SET_TEST_RESULTS")
            console.log("RESULTS:", action.results)
            return {
                ...state,
                results: action.results,
                input: "",
                text: ""
            }
        case "RESET":
            console.log("REST")
            return {
                ...state,
                text: { content: "" },
                input: "",
                totalWordCount: 0,
                currentWordCount: 0,
                results: {}
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


