import React from 'react'
import Housing from "../Housing";

function HousingList(props) {
    const {housings} = props;
    const housingElements = housings.map((housing) => {
        return <Housing key={housing.number} housing = {housing}/>
    });

    return (
        <ul>
            {housingElements}
        </ul>
    )
}

export default HousingList