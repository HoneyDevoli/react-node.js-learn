import React from 'react'

class HousingDetailed extends React.Component {
    render() {
        const { housing } = this.props.housing.location.state;

        return (
            <div>
                <p>Housing number: {housing.number}</p>
            </div>
        );
    }
}

export default HousingDetailed;
