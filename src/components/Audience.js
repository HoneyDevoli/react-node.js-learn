import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Audience extends Component{


    render() {
        const {audience} = this.props;

        return (
            <div className="card mx-auto" style = {{width: '50%'}}>
                <div className="card-body">
                    <h6 className='card-subtitle text-muted'>
                        {audience.number},{audience.type}
                    </h6>
                </div>
            </div>
        );
    }
}

export default Audience;