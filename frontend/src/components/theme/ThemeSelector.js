import React from "react";
import { useSelector, shallowEqual } from 'react-redux';
import ThemeDropdown from "./ThemeDropdown";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const {
        themes,
        selectedTheme
    } = useSelector(state => ({
        themes: state.theme.themes.default.data,
        selectedTheme: state.theme.selectedTheme
    }), shallowEqual);


    const themeSwitcher = selectedTheme => {
        props.setter(selectedTheme);
    };

    const resetThenSet = (theme) => {
        themeSwitcher(themes[theme])
    }
    return (
        <div>
            <ThemeDropdown
                title={"Theme"}
                list={Object.keys(themes)}
                header={selectedTheme.name}
                resetThenSet={resetThenSet}
            />
        </div>
    )
}
