import React from 'react'

function Housing(props) {
    const {housing} = props;
    return (
        <div>
            <p>Number of housing: {housing.number}</p>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Housing