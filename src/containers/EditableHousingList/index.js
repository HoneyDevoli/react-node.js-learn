import React from 'react';

import HousingList from '../../components/HousingList';
import HousingForm from '../../components/HousingForm';

class EditableHousingList extends React.Component {
    state = {
        formMetaData: {
            title: 'Create new housing',
            action: 'Create',
            isUpdate: false
        },
        currentHousing: {},
        housings: this.props.housings
    };

    handleHousingCreate = (housing) => {
        const updatedHousings = this.state.housings.slice();

        updatedHousings.push(housing);

        this.setState({
            housings: updatedHousings
        });
    };

    handleHousingUpdate = (housing) => {
        const updatedHousings = this.state.housings.slice();
        const prevHousing = this.state.currentHousing;

        const index = updatedHousings.indexOf(prevHousing);
        updatedHousings[index] = housing;

        this.setState({
            housings: updatedHousings,
        });

        this.handleDefaultFormRender();
    };

    handleHousingDelete = (housingNumber) => {
        let updatedHousings = this.state.housings.slice();

        updatedHousings = updatedHousings.filter((housing) => { return housing.number !== housingNumber; });

        this.setState({
            housings: updatedHousings
        });
    }

    handleEditFormRender = (housing) => {
        this.setState({
            formMetaData: {
                title: 'Update housing',
                action: 'Update',
                isUpdate: true
            },
            currentHousing: housing,
        });
    };

    handleDefaultFormRender = () => {
        this.setState({
            formMetaData: {
                title: 'Create new housing',
                action: 'Create',
                isUpdate: false
            },
            currentHousing: {}
        });
    }

    render() {
        return (
            <div>
                <HousingList
                    housings={this.state.housings}
                    handleHousingDelete={this.handleHousingDelete}
                    handleEditFormRender={this.handleEditFormRender}
                />
                <HousingForm
                    formMetaData={this.state.formMetaData}
                    currentHousing={this.state.currentHousing}
                    onHousingCreate={this.handleHousingCreate}
                    onHousingUpdate={this.handleHousingUpdate}
                />
            </div>
        );
    };
}

export default EditableHousingList;
