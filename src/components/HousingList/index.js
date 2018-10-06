import React from 'react'

import Housing from '../Housing'

function HousingList(props) {
    const { housings, handleEditFormRender } = props;

    const housingElems = housings.map((housing) => {
        return (
            <li key={housing.number}>
                <Housing
                    handleEditFormRender={handleEditFormRender}
                    housing={housing}
                />
            </li>
        );
    })

    return (
        <ul>
            {housingElems}
        </ul>
    )
}

export default HousingList
