import React from "react";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setUserInput } from '../../store/actions/testActions'


const UserInput = () => {
    const {
        input,
        text
    } = useSelector(state => ({
        input: state.test.input,
        text: state.test.text,
    }), shallowEqual);
    const dispatch = useDispatch();

    return (
        <div>
            {text.content &&
                <textarea
                    autoFocus
                    value={input}
                    onChange={(e) => dispatch(setUserInput(e.target.value))}
                    className="user-input"
                />
            }
        </div>
    )
}

export default UserInput
