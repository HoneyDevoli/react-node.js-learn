import React from 'react'

import Audience from '../Audience';

class AudienceList extends React.Component {
    render() {
        const { audiences } = this.props;
        const audienceElems = audiences.map((audience) => {
            return (
                <li key={audience.number}>
                    <Audience
                        audience={audience}
                    />
                </li>
            );
        })

        return (
            <div>
                <h3>Audiences: </h3>
                <ul>
                    {audienceElems}
                </ul>
            </div>
        );
    };
}

export default AudienceList;
