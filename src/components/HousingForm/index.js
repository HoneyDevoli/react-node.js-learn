import React from 'react'

class HousingForm extends React.Component {
    state = {
        number: ''
    };

    componentWillReceiveProps(nextProps) {
        const { currentHousing } = nextProps;

        this.setState({
            number: currentHousing.number || ''
        });
    };


    render() {
        const { formMetaData } = this.props;

        return (
            <div>
                <h2>{formMetaData.title}</h2>
                <form className="col-3 row" onSubmit={(e) => { this.handleSubmit(e) }}>
                    <div className="form-group col-5">
                        <label>
                            Number:<br></br>
                        </label>
                        <input className="form-control"
                            type="text"
                            name="number"
                            value={this.state.number}
                            onChange={(e) => this.handleNumberChange(e)}
                            required={true}
                            pattern='^[1-9]{1}[0-9]*'
                        />
                    </div>
                    <button className="btn btn-outline-success btn-sm ">{formMetaData.action}</button>
                </form>
            </div>
        );
    }

    handleNumberChange = (e) => {
        e.preventDefault();

        const { target } = e;
        this.setState({
            number: target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { formMetaData } = this.props;
        const { onHousingCreate, onHousingUpdate } = this.props;
        const housing = {
            number: +this.state.number,
            audiences: []
        };


        if (formMetaData.isUpdate) {
            onHousingUpdate(housing);
        } else {
            onHousingCreate(housing);
        }

        this.setState({
            number: ''
        });
    }
}

export default HousingForm
