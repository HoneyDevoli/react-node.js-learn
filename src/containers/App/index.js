import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios'

import EditableHousingList from '../EditableHousingList';
import HousingDetailed from '../../components/HousingDetailed';
import AudienceForm from '../../components/AudienceForm'

class App extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path='/housings'
                        render={() => <EditableHousingList/>}
                    />
                    <Route
                        exact
                        path='/housings/:housingId'
                        component={HousingDetailed}
                    />
                    <Route
                        exact
                        path='/housings/:housingId/audiences/:audienceId/edit'
                        component={AudienceForm}
                    />
                    <Route
                        exact
                        path='/housings/:housingId/audiences/add'
                        component={AudienceForm}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
