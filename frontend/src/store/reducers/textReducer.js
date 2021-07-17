import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initState = {
    counter: 0
}

const textReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_COUNTER":
            console.log('reducer', action.counter)
            return {
                ...state,
                counter: action.counter
            }
        default:
            return state;
    }
}

const persistConfig = {
    key: 'text',
    storage: storage
};

export default persistReducer(persistConfig, textReducer);