import React from 'react'

class Audience extends React.Component {
    render() {
        const { audience } = this.props;

        return (
            <div>
                <p>Number: {audience.number}</p>
                <p>Capacity: {audience.capacity}</p>
                <p>Type: {audience.type}</p>
                <p>Floor: {audience.floor}</p>
            </div>
        );
    };
}

export default Audience
