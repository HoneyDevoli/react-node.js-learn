import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
class Housing extends React.Component {
    handleSelect = (housing) => {

    }

    handleEdit = (housing) => {
        const { handleEditFormRender } = this.props;

        handleEditFormRender(housing);
    }

    handleDelete = (housingNumber) => {
        const { handleHousingDelete } = this.props;

        const heh = window.confirm('hotite udalit?');

        if (heh) {
            handleHousingDelete(housingNumber);
        }
    }

    render() {
        const { housing } = this.props;

        return (
            <div>
                <p>
                    <Link to={{
                        pathname: `/housings/${housing.number}}`,
                        state: { housing: housing }
                    }}>Number: {housing.number}</Link>

                </p>
                <button onClick={() => this.handleEdit(housing)}>edit</button>
                <button onClick={() => this.handleDelete(housing.number)}>delete</button>
            </div >
        );
    };

}

export default Housing
