import React, { useState, useEffect } from "react";


const UserInput = () => {
    const [userInput, setUserInput] = useState("");
    return (
        // <div className="card">
        <textarea
            value={userInput}
            placeholder="Good luck!"
            onChange={(e) => setUserInput(e.target.value)}
            className="quote-input"
            autoFocus
        />
        // </div>
    )
}

export default UserInput
