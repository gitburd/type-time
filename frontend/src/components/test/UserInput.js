import React from "react";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setUserInput } from '../../store/actions/testActions'


const UserInput = () => {
    const {
        input
    } = useSelector(state => ({
        input: state.test.input
    }), shallowEqual);
    const dispatch = useDispatch();

    return (
        <textarea
            autoFocus
            value={input}
            onChange={(e) => dispatch(setUserInput(e.target.value))}
            className="quote-input"
        />
    )
}

export default UserInput
