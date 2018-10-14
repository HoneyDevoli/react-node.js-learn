import React from 'react'

class AudienceForm extends React.Component {
    state = {
        number: this.props.location.state.audience.number || '',
        type: this.props.location.state.audience.type ||'computer',
        capacity: this.props.location.state.audience.capacity || '',
        floor: this.props.location.state.audience.floor || '',
        audiences: []
    }

    componentDidMount() {
        const {housingId} = this.props.match.params.housingId;
        if(this.props.isEdit) {
            fetch(`/housings/${housingId}`)
                .then(res => res.json())
                .then(audiences => this.setState({audiences}));
        }
    }

    render() {
        const {audience, isEdit} = this.props.location.state;
        return (
            <div>
                <h2>{isEdit ? 'Editing ' : 'Adding '} audience</h2>
                <form onSubmit={(e) => { this.handleSubmit(e) }}>
                    <label>
                        <span>Number:</span><br></br>
                        <input
                            type="text"
                            name="number"
                            value={this.state.number}
                            onChange={(e) => this.handleNumberChange(e)}
                            required={true}
                        />
                    </label>
                    <br></br>

                    <label>
                        <span>Capacity:</span><br></br>
                        <input
                            type="text"
                            name="capacity"
                            value={this.state.capacity}
                            onChange={(e) => this.handleCapacityChange(e)}
                            required={true}
                            pattern='\d+'
                        />
                    </label>
                    <br></br>

                    <label>
                        <span>Type:</span><br></br>
                        <select name="type"
                                 defaultValue={this.state.type}
                                 onChange={(e) => this.handleTypeChange(e)}
                                 required={true}>
                            <option value={'computer'}>
                                computer
                            </option>
                            <option value={'lection'}>
                                lection
                            </option>
                        </select>
                    </label>
                    <br></br>

                    <label>
                        <span>Floor:</span><br></br>
                        <input
                            type="text"
                            name="floor"
                            defaultValue={audience.floor}
                            onChange={(e) => this.handleFloorChange(e)}
                            required={true}
                            pattern='\d+'
                        />
                    </label>

                    <br></br>
                    <button>{isEdit ? 'Edit' : 'Add'}</button>
                </form>

                <button onClick={ () => this.props.history.goBack()}>Back</button>
            </div>
        )
    }

    handleNumberChange = (e) => {
        e.preventDefault();

        const { target } = e;

        this.setState({
            number: target.value
        });
    }

    handleCapacityChange = (e) => {
        e.preventDefault();

        const { target } = e;

        this.setState({
            capacity: target.value
        });
    }

    handleFloorChange = (e) => {
        e.preventDefault();

        const { target } = e;

        this.setState({
            floor: target.value
        });
    }

    handleTypeChange = (e) => {
        e.preventDefault();

        const { target } = e;
        console.log(target.value);
        this.setState({
            type: target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let isRepeat = false;
        for (let i = 0; i < this.state.audiences.length; i++) {
            if (+this.state.audiences[i].number === +this.state.number) {
                isRepeat = true;
            }
        }

        if (!isRepeat) {
            const {isEdit} = this.props.location.state;
            if (isEdit) {
                //send to update
                const housingId = this.props.match.params.housingId;
                const audienceId = this.props.match.params.audienceId;
                fetch(`/housings/${housingId}/audiences/${audienceId}/edit`, {
                    method: 'put',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.state)
                });
            } else {
                //send to add
                const housingId = this.props.match.params.housingId;
                fetch(`/housings/${housingId}/audience/add`, {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.state)
                });
            }
            this.props.history.goBack();
        } else {
        window.alert("repeation")}
    }
}

export default AudienceForm