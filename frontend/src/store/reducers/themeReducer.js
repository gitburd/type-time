import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import * as themes from '../../components/theme/schema.json';

const initState = {
    themes: themes,
    selectedTheme: themes.default.data['Waves']
}

const themeReducer = (state = initState, action) => {
    switch (action.type) {
        case "SELECT_THEME":
            console.log("SELECT_THEME", action.selectedTheme)
            return {
                ...state,
                selectedTheme: action.selectedTheme
            }
        default:
            return state;
    }
}

const persistConfig = {
    key: 'theme',
    storage: storage
};

export default persistReducer(persistConfig, themeReducer);


