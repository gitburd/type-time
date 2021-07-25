import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initState = {
    timer: { id: 0, value: 30, selected: false, key: "timer" },
    input: "",
    text: "",
    totalWordCount: 0,
    currentWordCount: 0,
    totalKeyCount: 0,
    currentKeyCount: 0,
    totalCorrectKeyCount: 0,
    currentCorrectKeyCount: 0,
    results: {},
    category: { id: 0, value: "Any", dbLabel: null, selected: false, key: "category" },
    currentKey: '',
    showKeyboard: true,
    requireAccuracy: false,
}

const testReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USER_INPUT":
            // console.log("SET_USER_INPUT ?", action)
            return {
                ...state,
                input: action.input,
                currentKey: action.currentKey,
                currentWordCount: action.currentWordCount,
                currentKeyCount: action.currentKeyCount,
                currentCorrectKeyCount: action.currentCorrectKeyCount,
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
        case "SET_SHOW_KEYBOARD":
            console.log("SET_SHOW_KEYBOARD")
            return {
                ...state,
                showKeyboard: action.showKeyboard
            }
        case "SET_REQUIRE_ACCURACY":
            console.log("SET_REQUIRE_ACCURACY")
            return {
                ...state,
                requireAccuracy: action.requireAccuracy
            }
        case "SET_TEXT":
            console.log("SET_TEXT", action.text)
            return {
                ...state,
                text: action.text,
                input: "",
                currentKey: action.text.content[0]
            }
        case "SET_FIRST_TEXT":
            console.log("SET_FIRTS_TEXT", action.text)
            return {
                ...state,
                text: action.text,
                input: "", textinput: "",
                totalWordCount: 0,
                currentWordCount: 0,
                totalKeyCount: 0,
                currentKeyCount: 0,
                totalCorrectKeyCount: 0,
                currentCorrectKeyCount: 0,
                results: {},
                currentKey: action.text.content[0]
            }
        case "SET_TOTALS":
            console.log("SET_TOTALS")
            return {
                ...state,
                totalWordCount: action.totalWordCount,
                currentWordCount: 0,
                totalKeyCount: action.totalKeyCount,
                // currentKeyCount: 0,
                totalCorrectKeyCount: action.totalCorrectKeyCount,
                // currentCorrectKeyCount: 0,
            }
        case "SET_TEST_RESULTS":
            console.log("SET_TEST_RESULTS")
            console.log("RESULTS:", action.results)
            return {
                ...state,
                results: action.results,
                input: "",
                text: "",
                currentKey: "",
                accuracy: action.accuracy
            }
        case "RESET":
            console.log("REST")
            return {
                ...state,
                text: { content: "" },
                input: "",
                totalWordCount: 0,
                currentWordCount: 0,
                results: {},
                currentKey: ""
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


