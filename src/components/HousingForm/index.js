import React from 'react'

class HousingForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();

        const { onHousingCreate } = this.props;

        onHousingCreate((Math.random() * 100).toFixed(0));
    }

    render() {

        return (
            <div>
                <h2>housing form</h2>
                <form onSubmit={(e) => { this.handleSubmit(e) }}>
                    <input type="text" name="number" />
                    <button>add</button>
                </form >
            </div>
        );
    }
}

export default HousingForm
