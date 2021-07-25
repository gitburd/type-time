import React, { useState, useEffect } from "react";
import TestText from './TestText'
import UserInput from './UserInput'
import Results from '../tools/Results'
import './Test.css'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

const Test = () => {
    const {
        input,
        text,
        category,
        results
    } = useSelector(state => ({
        input: state.test.input,
        text: state.test.text,
        category: state.test.category,
        results: state.test.results
    }), shallowEqual);
    console.log("?", results)

    if (!text.content) {
        return <div className="card">
            <div className="test-area">
                {results && <Results />}
                {Object.keys(results).length === 0 && <h2>Test Area</h2>}
            </div>
        </div>
    }
    return (
        <div className="card">
            <TestText />
            <UserInput />
        </div>
    )
}

export default Test
