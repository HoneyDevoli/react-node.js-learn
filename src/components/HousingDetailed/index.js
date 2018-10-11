import React from 'react';

import AudienceList from '../AudienceList';
import Audience from "../Audience";
import AudienceForm from "../AudienceForm";
import {Link} from "react-router-dom";
import './index.css'

class HousingDetailed extends React.Component {
    state = {
        selectedAudience: {},
        formMetaData: {
            title: 'Create new audience',
            action: 'Create',
            isUpdate: false
        },
        currentAudience: {}
    };
    componentDidMount(){
        const housingId = this.props.match.params.housingId;
        fetch(`/housings/${housingId}`)
            .then(res => res.json())
            .then(audiences => this.setState({ selectedAudience: audiences }));
    }
    render() {
        const housing = this.props.match.params.housingId;
        console.log(this.props);
        return (
            <div>
                <h2>Housing number {housing}</h2>
                <AudienceList
                    constilUpdate={this.costilUpdate}
                    housingId={housing}
                    handleEditAudience={this.handleEditAudience}/>
                <Link className="link" to={{
                    pathname: `/housings/${housing}/audiences/add`,
                    state: {
                        audience: {},
                        isEdit: false
                    }
                }}>Add new Audience</Link>
                <br></br>
                <button onClick={ () => this.props.history.goBack()}>Back</button>
            </div>
        );
    }

    // handleDeleteAudience = (audienceNumber) => {
    //     let updatedAudience = this.state.selectedAudience;
    //     const housingId = this.props.match.params.housingId;
    //
    //     updatedAudience = updatedAudience.filter((audience) => {
    //         return audience.number !== audienceNumber;
    //     });
    //
    //     this.setState({
    //         audience : updatedAudience
    //     });
    //
    //     fetch(`/housings/${housingId}/audiences/delete/${audienceNumber}` , {
    //         headers: {"Content-Type": "application/json"},
    //         method: "delete"
    //     });
    // }
}

export default HousingDetailed;
