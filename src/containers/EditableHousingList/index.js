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
        housings: []
    };

    componentDidMount() {
        fetch('/housings')
            .then(res => res.json())
            .then(housings => this.setState({ housings }));

    }

    handleHousingCreate = (housing) => {
        const updatedHousings = this.state.housings.slice();

        let isRepeat = false;
        for (let i = 0; i < updatedHousings.length; i++) {
            if (updatedHousings[i].number === +housing.number) {
                isRepeat = true;
            }
        }

        if (!isRepeat) {
            updatedHousings.push(housing);
            fetch('/housings/create', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(housing)
            });
            // .then(response => console.log(response));

            this.setState({
                housings: updatedHousings
            });
        } else {
            window.alert('entering repeaiting housing number')
        }
    };

    handleHousingUpdate = (housing) => {
        const updatedHousings = this.state.housings.slice();
        const prevHousing = this.state.currentHousing;

        let isRepeat = false;
        for(let i = 0; i<updatedHousings.length; i++){
            if(updatedHousings[i].number === +housing.number){
                isRepeat = true;
            }
        }

        if(isRepeat){
            window.alert('it is repeat');
        } else {
            const index = updatedHousings.indexOf(prevHousing);
            updatedHousings[index] = housing;

            this.setState({
                housings: updatedHousings,
            });

            fetch('/housings/update/' + prevHousing.number, {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(housing)
            });

            this.handleDefaultFormRender();
        }
    };

    handleHousingDelete = (housingNumber) => {
        let updatedHousings = this.state.housings.slice();

        updatedHousings = updatedHousings.filter((housing) => { return housing.number !== housingNumber; });

        this.setState({
            housings: updatedHousings
        });

        fetch('housings/delete/' + housingNumber, {
            headers: {"Content-Type": "application/json"},
            method: "delete"
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
        console.log(this.state.housings);
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
