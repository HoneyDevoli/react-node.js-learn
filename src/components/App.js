import React from 'react'
import HousingForm from './HousingForm'
import HousingList from './HousingList'

function App(props) {
    const {data} = props;

    return (
        <div id="housing_page">
            {/*<HousingForm/>*/}
            <HousingList housings={data.slice()}/>
        </div>
    )
}

export default App