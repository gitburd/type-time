import React from 'react'

const DeleteTestRecord = ({ toggleShowDelete }) => {

    return (
        <div onClick={toggleShowDelete} id="delete-record" className="delete-record">
            Delete Test Record
        </div>
    )
}

export default DeleteTestRecord
