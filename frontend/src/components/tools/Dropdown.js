import React, { useState } from 'react'

const Dropdown = ({ title, header, resetThenSet, list }) => {
    const [isListOpen, setIsListOpen] = useState(false);

    const toggleList = () => {
        setIsListOpen(!isListOpen)
    }

    const closeList = () => {
        setIsListOpen(false)
    }

    const selectItem = (item) => {
        const { id, key } = item;
        resetThenSet(id, key)
        setIsListOpen(false)
    }

    return (
        <div className="dd-wrapper">
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
                            className={item.value === header ? "dd-list-item dd-active" : "dd-list-item"}
                            key={item.id}
                            onClick={() => selectItem(item)}
                        >
                            {item.value}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown
