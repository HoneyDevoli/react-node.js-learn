import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';

import EditableHousingList from '../EditableHousingList';
import HousingDetailed from '../../components/HousingDetailed';

class App extends React.Component {
    state = {
        housings: this.props.housings
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path='/housings'
                        render={() => <EditableHousingList housings={this.state.housings} />}
                    />
                    <Route
                        exact
                        path='/housings/:housingId'
                        render={(housing) => <HousingDetailed housing={housing}/>}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
