import React from 'react';

import AudienceList from '../AudienceList';
import {Link} from "react-router-dom";
import './index.css'

class HousingDetailed extends React.Component {
    state = {
        selectedAudiences: [],
        formMetaData: {
            title: 'Create new audience',
            action: 'Create',
            isUpdate: false
        }
    };
    componentDidMount(){
        const housingId = this.props.match.params.housingId;
        const myHeaders = new Headers();
        myHeaders.append("Cache-Control", "no-cache, no-store, must-revalidate");
        myHeaders.append("Pragma", "no-cache");
        myHeaders.append("Expires", 0);

        fetch(`/housings/${housingId}`, {
                headers: myHeaders
            })
            .then(res => res.json())
            .then(audiences => this.setState({ selectedAudiences: audiences }));
    }
    render() {
        const housing = this.props.match.params.housingId;
        return (
            <div>
                <h2>Housing number {housing}</h2>
                <AudienceList
                    selectedAudiences={this.state.selectedAudiences}
                    housingId={housing}
                    handleEditAudience={this.handleEditAudience}
                    handleDeleteAudience={this.handleDeleteAudience}/>
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

    handleDeleteAudience = (audienceNumber) => {
        let updatedAudience = this.state.selectedAudiences;
        const housingId = this.props.match.params.housingId;

        updatedAudience = updatedAudience.filter((audience) => {
            return audience.number !== audienceNumber;
        });

        this.setState({
            selectedAudiences : updatedAudience
        });

        fetch(`/housings/${housingId}/audiences/delete/${audienceNumber}` , {
            headers: {"Content-Type": "application/json"},
            method: "delete"
        });
    }
}

export default HousingDetailed;
