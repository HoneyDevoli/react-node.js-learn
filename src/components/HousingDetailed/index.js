import React from 'react';

import AudienceList from '../AudienceList';

class HousingDetailed extends React.Component {
    render() {
        const { match } = this.props; // for api
        const selectedHousing = {
            "number": 1,
            "audiences": [
                {
                    "number": 423,
                    "capacity": 55,
                    "type": "computer",
                    "floor": 2,
                },
                {
                    "number": 425,
                    "capacity": 56,
                    "type": "computer",
                    "floor": 3,
                },
            ]
        };

        return (
            <div>
                <h2>Housing number {selectedHousing.number}</h2>
                <AudienceList audiences={selectedHousing.audiences} />
            </div>
        );
    }
}

export default HousingDetailed;
