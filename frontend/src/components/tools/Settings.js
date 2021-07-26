import React, { useEffect, useRef } from 'react'
import { setTimer, setCategory, setShowKeyboard, setRequireAccuracy } from '../../store/actions/testActions'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Dropdown from './Dropdown'
import { timers, categories } from './settingOptions'
import { selectTheme } from "../../store/actions/themeActions"
import ThemeSelector from "../theme/ThemeSelector"

const Settings = ({ setShowSettings }) => {
    const {
        timer,
        category,
        showKeyboard,
        requireAccuracy,
        themes
    } = useSelector(state => ({
        timer: state.test.timer,
        category: state.test.category,
        showKeyboard: state.test.showKeyboard,
        requireAccuracy: state.test.requireAccuracy,
        themes: state.theme.themes,
    }), shallowEqual);

    const dispatch = useDispatch();

    const resetThenSet = (id, key) => {
        let temp;
        switch (key) {
            case "timer":
                temp = [...timers]
                temp.forEach((item) => item.selected = false);
                temp[id].selected = true;
                dispatch(setTimer(temp[id]))
                break;
            case "category":
                temp = [...categories]
                temp.forEach((item) => item.selected = false);
                temp[id].selected = true;
                dispatch(setCategory(temp[id]))
                break;
            default:
                console.log("default", key)
        }
    }

    const handleClick = e => {
        if (settings.current.contains(e.target) && e.target.id !== "settings-colse-icon") {
            return;
        }
        if (e.target.id === "settings-icon") return;
        setShowSettings(false)
    };

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const setCheckboxValue = (e) => {
        if (e.target.id === "showKeyboard") {
            dispatch(setShowKeyboard(!showKeyboard))
        } else if (e.target.id === "requireAccuracy") {
            dispatch(setRequireAccuracy(!requireAccuracy))
        }
    }

    const onSelectTheme = (e, theme) => {
        e.preventDefault()
        dispatch(selectTheme(themes.default.data[theme]))
    }

    const setSelectedTheme = (theme) => {
        dispatch(selectTheme(theme))
    }
    const settings = useRef();
    return (
        <div ref={settings} className="settings">
            <p className="settings-header">Settings <span id="settings-colse-icon">X</span></p>
            <Dropdown title={"Timer"} list={timers} header={timer.value} resetThenSet={resetThenSet} />
            <Dropdown title={"Category"} list={categories} header={category.value} resetThenSet={resetThenSet} />
            <ThemeSelector setter={setSelectedTheme} />
            <div style={{ marginBottom: '1em' }}>
                <label className="checkbox-wrapper">
                    <input
                        checked={showKeyboard}
                        onChange={setCheckboxValue}
                        type="checkbox"
                        id="showKeyboard"
                    />
                    <span>Show Keyboard</span>
                </label>
            </div>
            <div style={{ marginBottom: '2em' }}>
                <label className="checkbox-wrapper">
                    <input
                        checked={requireAccuracy}
                        onChange={setCheckboxValue}
                        type="checkbox"
                        id="requireAccuracy"
                    />
                    <span>Require Accuracy</span>
                </label>
            </div>
        </div>
    )
}

export default Settings
