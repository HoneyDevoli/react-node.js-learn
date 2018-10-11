import React from 'react'
import {Link} from "react-router-dom";

class Audience extends React.Component {

    render() {
        const {
            audience,
            housingId
            } = this.props;

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Number</th>
                            <th>Capacity</th>
                            <th>Type</th>
                            <th>Floor</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>{audience.number}</td>
                            <td>{audience.capacity}</td>
                            <td>{audience.type}</td>
                            <td>{audience.floor}</td>
                            <td>
                                <Link to={{
                                    pathname: `/housings/${housingId}/audiences/${audience.number}/edit`,
                                    state: {
                                        audience: audience,
                                        isEdit: true
                                    }
                                }}>Update</Link>
                                <button onClick={() => this.handleDelete(audience.number)}>delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    handleEdit = (audience) => {
        const {handleEditAudience} = this.props;

        handleEditAudience(audience);
    }

    handleDelete = (audienceNumber) => {
        const {handleDeleteAudience} = this.props;

        const heh = window.confirm('do you want to delete?');
        if (heh) {
            handleDeleteAudience(audienceNumber);
        }
    }
}

export default Audience
