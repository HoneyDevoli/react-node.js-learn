import React from 'react'
import housings from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'
import HousingList from './HousingList'
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import AudienceList from "./AudienceList";
import Link from "react-router-dom/es/Link";

function App() {
    const kek = {name: "hui"};
    return (
        <div className="container">

            <div className="jumbotron">
                <h1 className="display-3">Sharaga</h1>
            </div>
            <Link to='/housings'>Hui</Link>

            <Switch>
                <Route exact path='/housings' render={() => <HousingList housings={housings}/>}/>
                {/*<Route exact path='/audiences' component = {AudienceList}/>*/}
                {/*<Route exact path='/housings-summary' component = {HousingSummaryList}/>*/}
                {/*<Route exact path='/audiences-summary' component = {AudienceSummaryList}/>*/}
            </Switch>
        </div>
    )
}

export default App