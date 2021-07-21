import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getRandomText, setUserInput, updateTotalWordCount, createTestRecod } from '../../store/actions/testActions'

const TestText = () => {
    const {
        input,
        text
    } = useSelector(state => ({
        input: state.test.input,
        text: state.test.text
    }), shallowEqual);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log("TestText ue")
    //     dispatch(getRandomText())
    // }, [])

    useEffect(() => {
        // async function updateWC() {
        // await 
        // }
        if (text.content !== "" && text.content === input) {
            dispatch(updateTotalWordCount())
            dispatch(getRandomText())
            dispatch(setUserInput(""))
        }
    }, [input])
    const textLetters = text.content && text.content.split("")
    const inputLetters = input.split("")
    return (<div className="quote-display">
        {textLetters && textLetters.length > 0 && textLetters.map((letter, idx) => (
            <span key={idx} className={idx === inputLetters.length ? "active-letter" : idx > inputLetters.length ? "" : letter === inputLetters[idx] ? "correct" : "incorrect"}>{letter}</span>
        ))}
    </div>
    )
}

export default TestText

