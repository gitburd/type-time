import React, { useState, useEffect } from "react";
import TestText from './TestText'
import UserInput from './UserInput'
import './Test.css'

const Test = () => {
    return (
        <div className="card">
            <TestText />
            <UserInput />
        </div>
    )
}

export default Test
