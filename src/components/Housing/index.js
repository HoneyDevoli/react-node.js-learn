import React from 'react'

class Housing extends React.Component {
    handleEdit = (housing) => {
        const { handleEditFormRender } = this.props;

        handleEditFormRender(housing);
    }

    handleDelete = (housingId) => {
    }

    render() {
        const { housing } = this.props;

        return (
            <div>
                <p>Number: {housing.number}</p>
                <button onClick={() => this.handleEdit(housing)}>edit</button>
                <button onClick={() => this.handleDelete(housing.id)}>delete</button>
            </div>
        );
    };

}

export default Housing
