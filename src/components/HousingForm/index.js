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
                <form onSubmit={(e) => { this.handleSubmit(e) }}>
                    <label>
                        <span>Number:</span><br></br>
                        <input
                            type="text"
                            name="number"
                            value={this.state.number}
                            onChange={(e) => this.handleNumberChange(e)}
                        />
                    </label>
                    <button>{formMetaData.action}</button>
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
            number: +this.state.number
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
