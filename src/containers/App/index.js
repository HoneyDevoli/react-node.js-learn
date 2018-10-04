import React from 'react'

import EditableHousingList from '../EditableHousingList';

class App extends React.Component {
    state = {
        housings: this.props.housings
    }

    render() {
        return (
            <div>
                <EditableHousingList housings={this.state.housings} />
            </div>
        );
    }
}

export default App;
