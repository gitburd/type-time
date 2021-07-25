import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getRandomText, setUserInput, updateTotalCounts } from '../../store/actions/testActions'

const TestText = () => {
    const {
        input,
        text,
        category,
        requireAccuracy
    } = useSelector(state => ({
        input: state.test.input,
        text: state.test.text,
        category: state.test.category,
        requireAccuracy: state.test.requireAccuracy,
    }), shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        if (text.content !== "") {
            if ((requireAccuracy && text.content === input) ||
                (!requireAccuracy && text.content.length === input.length)) {
                dispatch(updateTotalCounts())
                dispatch(getRandomText(category))
                dispatch(setUserInput(""))
            }
        }
    }, [input])


    const textLetters = text.content && text.content.split("")
    const inputLetters = input.split("")
    return (
        <div className="container-a">
            <div className="user-input-display">
                {textLetters && textLetters.length > 0 && textLetters.map((letter, idx) => (
                    <span key={idx} className={idx === inputLetters.length ? "active-letter" :
                        idx > inputLetters.length ? "" :
                            letter === inputLetters[idx] ? "correct" : "incorrect"}>
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default TestText

// const textLines = text.content && text.content.split('\n')
//     const inputLetters = input.split("")

//     return (<div className="user-input-display">
//         {textLines && textLines.map(line => {
//             let textLetters = line.split("")
//             return (
//                 <>
//                     {
//                         textLetters && textLetters.length > 0 && textLetters.map((letter, idx) => (
//                             <span key={idx} className={idx === inputLetters.length ?
//                                 "active-letter" : idx > inputLetters.length ? "" : letter === inputLetters[idx] ?
//                                     "correct" : "incorrect"}>{letter}</span>
//                         ))
//                     }
//                     <br />
//                 </>
//             )
//         })
//         }
//     </div>
//     )
// }
