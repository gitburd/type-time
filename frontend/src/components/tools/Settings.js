import React from 'react'
import { setTimer, setCategory } from '../../store/actions/testActions'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Dropdown from './Dropdown'
import { timers, categories } from './settingOptions'

const Settings = () => {
    const {
        timer,
        category,
    } = useSelector(state => ({
        timer: state.test.timer,
        category: state.test.category
    }), shallowEqual);

    const dispatch = useDispatch();

    const resetThenSet = (id, key) => {
        let temp;
        switch (key) {
            case "timer":
                temp = [...timers]
                temp.forEach((item) => item.selected = false);
                temp[id].selected = true;
                dispatch(setTimer(temp[id].value))
                break;
            case "category":
                temp = [...categories]
                temp.forEach((item) => item.selected = false);
                temp[id].selected = true;
                dispatch(setCategory(temp[id].value))
                break;
            default:
                console.log("default", key)
        }
    }
    return (
        <div>
            <Dropdown title={"Timer"} list={timers} header={timer} resetThenSet={resetThenSet} />
            <Dropdown title={"Category"} list={categories} header={category} resetThenSet={resetThenSet} />
        </div>
    )
}

export default Settings
