import { useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

export const useTheme = () => {
    const {
        themes,
        selectedTheme
    } = useSelector(state => ({
        themes: state.theme.themes,
        selectedTheme: state.theme.selectedTheme
    }), shallowEqual);

    const [theme, setTheme] = useState(selectedTheme);
    const [themeLoaded, setThemeLoaded] = useState(false);

    useEffect(() => {
        selectedTheme ? setTheme(selectedTheme) : setTheme(themes.default.data.Waves);
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded };
};