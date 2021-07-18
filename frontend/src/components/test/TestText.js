import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getText } from '../../store/actions/testActions'

const TestText = () => {
    const {
        input
    } = useSelector(state => ({
        input: state.test.input
    }), shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getText())
    }, [])



    const text = { content: 'Happiness is the reward we get for living to the highest right we know. Happiness is the reward we get for living to the highest right we know. Happiness is the reward we get for living to the highest right we know. Happiness is the reward we get for living to the highest right we know. Happiness is the reward we get for living to the highest right we know. Happiness is the reward we get for living to the highest right we know. Happiness is the reward we get for living to the highest right we know. hvj kubiubiu' }
    const textLetters = text.content.split("")
    const inputLetters = input.split("")
    return (
        <div className="quote-display">
            {textLetters.map((letter, idx) => (
                <span key={idx} className={idx >= inputLetters.length ? "" : letter === inputLetters[idx] ? "correct" : "incorrect"}>{letter}</span>
            ))}
        </div>
    )
}

export default TestText
