import React from 'react'
import "./Tool.css"
import { helpKeys, keyMap } from './helpKeys'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

const Help = () => {
    const {
        input,
        text,
        currentKey
    } = useSelector(state => ({
        input: state.test.input,
        text: state.test.text,
        currentKey: state.test.currentKey
    }), shallowEqual);
    const current = currentKey && keyMap[currentKey] ? keyMap[currentKey].value : "";
    const shift = currentKey && keyMap[currentKey] ? keyMap[currentKey].shift : "none";
    return (
        <div className="keyboard">
            {Object.keys(helpKeys).map(row => (
                <section className="key-row" key={row}>
                    {helpKeys[row].map((key, idx) => {
                        let className = key.value === current ? `${key.class} active-key` : `${key.class}`
                        if (shift === 'right' && row === "rowFour" && idx === 11) {
                            className += ' active-key'
                        } else if (shift === 'left' && row === "rowFour" && idx === 0) {
                            className += ' active-key'
                        }
                        return <div key={`${key}-${idx}`} className={className}>{key.value}</div>
                    })}
                </section>
            )
            )}
        </div>
    )
}

export default Help
