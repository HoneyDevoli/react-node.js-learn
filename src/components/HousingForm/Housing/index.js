import React from 'react'

function Housing(props) {
    const { housing } = props;

    return (
        <div>
            <p>Number: {housing.number}</p>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

export default Housing
