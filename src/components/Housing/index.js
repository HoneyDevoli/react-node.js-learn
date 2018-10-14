import React from 'react'
import { Link } from 'react-router-dom';
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
            <div className="row mb-2">
                <div className="col-3">
                    <Link className="link" to={{
                        pathname: `/housings/${housing.number}`,
                        state: { housing: housing }
                    }}>Number: {housing.number}</Link>
                </div>
                <div className="col-9" >
                    <button className="btn btn-sm btn-outline-warning mr-2" onClick={() => this.handleEdit(housing)}>edit</button>
                    <button  className="btn btn-sm btn-outline-danger"onClick={() => this.handleDelete(housing.number)}>delete</button>
                </div>
            </div >
        );
    };

}

export default Housing
