import { useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import _ from 'lodash';


export const useTheme = () => {
    const {
        themes,
        selectedTheme
    } = useSelector(state => ({
        themes: state.theme.themes,
        selectedTheme: state.theme.selectedTheme
    }), shallowEqual);

    const [theme, setTheme] = useState(themes.default.data.Waves);
    const [themeLoaded, setThemeLoaded] = useState(false);

    useEffect(() => {
        const localTheme = selectedTheme
        localTheme ? setTheme(localTheme) : setTheme(themes.default.data.Waves);
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded };
};