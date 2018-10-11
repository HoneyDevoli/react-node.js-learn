import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import './index.css'
class Housing extends React.Component {
    handleEdit = (housing) => {
        const { handleEditFormRender } = this.props;

        handleEditFormRender(housing);
    }

    handleDelete = (housingNumber) => {
        const { handleHousingDelete } = this.props;

        const heh = window.confirm('do you want to delete?');
        if (heh) {
            handleHousingDelete(housingNumber);
        }
    }

    render() {
        const { housing } = this.props;

        return (
            <div>
                <p className="link">
                    <Link className="link" to={{
                        pathname: `/housings/${housing.number}`,
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
