import React from 'react'

import Audience from '../Audience';

class AudienceList extends React.Component {

    render() {
        const {
            housingId,
            handleEditAudience,
            selectedAudiences
        } = this.props;
        const audienceElems = selectedAudiences.map((audience) => {
            return (
                <li key={audience.number}>
                    <Audience
                        housingId={housingId}
                        audience={audience}
                        handleDeleteAudience={this.handleDeleteAudience}
                        handleEditAudience={handleEditAudience}
                    />
                </li>
            );
        })

        return (
            <div>
                <h3>Audiences: </h3>
                <ul style={{'listStyleType': 'none', 'padding': '0'}}>
                    {audienceElems}
                </ul>
            </div>
        );
    };

    handleDeleteAudience = (audienceNumber) => {
        console.log(audienceNumber);
        this.props.handleDeleteAudience(audienceNumber);

    }
}


export default AudienceList;
