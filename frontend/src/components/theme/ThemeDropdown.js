import React, { useState, useRef, useEffect } from 'react'

const ThemeDropdown = ({ title, header, resetThenSet, list }) => {
    const [isListOpen, setIsListOpen] = useState(false);

    const toggleList = () => {
        setIsListOpen(!isListOpen)
    }

    const selectItem = (item) => {
        // const { id, key } = item;
        resetThenSet(item)
        setIsListOpen(false)
    }

    const handleClick = e => {
        if (themeDdRef.current.contains(e.target)) {
            return;
        }
        setIsListOpen(false)
    };

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const themeDdRef = useRef();
    console.log(header)
    return (
        <div ref={themeDdRef} className="dd-wrapper">
            <p>{title}</p>
            <button
                type="button"
                className="dd-header"
                onClick={toggleList}
            >
                <div className="dd-header-title">{header}</div>
                {isListOpen
                    ? "-"
                    : "+"}
            </button>
            {isListOpen && (
                <div
                    role="list"
                    className="dd-list"
                >
                    {list.map((item) => (
                        <button
                            type="button"
                            className={item === header ? "dd-list-item dd-active" : "dd-list-item"}
                            style={{ color: 'black' }}
                            key={item}
                            onClick={() => selectItem(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ThemeDropdown;
