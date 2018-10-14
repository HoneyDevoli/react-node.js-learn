import React from 'react'
import { Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import EditableHousingList from '../EditableHousingList';
import HousingDetailed from '../../components/HousingDetailed';
import AudienceForm from '../../components/AudienceForm'

class App extends React.Component {

    render() {
        return (
            <div className="container" >
                <div className="jumbotron" style={{ 'backgroundImage': 'url("https://cdn.discordapp.com/attachments/377112325909512204/500393236553269249/main_background.png")'}}>
                    <h1 style={{ 'color': 'white',
                        'textShadow':
                        '-2px -2px 0 #000,2px -2px 0 #000, -2px 2px 0 #000,2px 2px 0 #000'}}>Sharaga</h1>
                </div>
                <div className="container-fluid">
                    <Switch >
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
            </div>
        );
    }
}

export default App;
