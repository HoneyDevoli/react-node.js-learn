import React from 'react'
import Housing from '../Housing'
import './style.css'
import Route from "react-router-dom/es/Route";
import housings from "../../fixtures";
import Switch from "react-router-dom/es/Switch";

export default function HousingList(props) {
    console.log(props);
    const housings = props.housings;
    const housingElements = housings.map(housing =>
        <li key={housing.id} className='audience-list__li'>
            <Housing housing={housing}/>
        </li>
    );

    return (
        <div>
            <form>
                <input type="text" />
                <button>dobavit`</button>
            </form>
            < ul>
                {housingElements}
            </ul>
        </div>
    )
}