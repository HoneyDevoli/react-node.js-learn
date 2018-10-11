import React from 'react'

import Audience from '../Audience';

class AudienceList extends React.Component {
    state = {
            audiences: []
    }

    componentDidMount() {
        const {housingId} = this.props;
        fetch(`/housings/${housingId}`)
            .then(res => res.json())
            .then(audiences => this.setState({ audiences }));

    }

    render() {
        const {
            housingId,
            handleEditAudience
        } = this.props;
        const audienceElems = this.state.audiences.map((audience) => {
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
                <ul>
                    {audienceElems}
                </ul>
            </div>
        );
    };

    handleDeleteAudience = (audienceNumber) => {
        let updatedAudience = this.state.audiences;
        const {housingId} = this.props;

        updatedAudience = updatedAudience.filter((audience) => {
            return audience.number !== audienceNumber;
        });

        this.setState({
            audiences : updatedAudience
        });

        fetch(`/housings/${housingId}/audiences/delete/${audienceNumber}` , {
            headers: {"Content-Type": "application/json"},
            method: "delete"
        });
    }
}



export default AudienceList;
