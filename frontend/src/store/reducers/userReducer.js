import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initState = {
    id: 1,
    name: "Test User",
    email: "test@e.mail",
    tests: [],
    isAuthenticated: false,
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":
            console.log("LOGIN")
            return {
                ...state,
                name: action.user.name,
                email: action.user.email
            }

        case "LOGOUT":
            console.log("LOGOUT")
            return initState

        case "SET_USER_TESTS":
            console.log("GET_USER_TESTS")
            return {
                ...state,
                tests: action.tests
            }
        default:
            return state;
    }
}

const persistConfig = {
    key: 'user',
    storage: storage
};

export default persistReducer(persistConfig, userReducer);


