import React from 'react';

import HousingList from '../../components/HousingList';
import HousingForm from '../../components/HousingForm';

class EditableHousingList extends React.Component {
    state = {
        housings: this.props.housings
    }

    handleHousingCreate(housing) {
        const updatedHousings = this.state.housings.slice();
        updatedHousings.push({number: housing});

        this.setState({
            housings: updatedHousings
        });
    }

    render() {
        return (
            <div>
                <HousingList housings={this.state.housings} />
                <HousingForm onHousingCreate={(housing) => {this.handleHousingCreate(housing)}}/>
            </div>
        );
    }
}

export default EditableHousingList;
