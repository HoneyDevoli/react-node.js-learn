import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import AudienceList from './AudienceList'
import Link from "react-router-dom/es/Link";

class Housing extends Component {

    render() {
        const {housing} = this.props;

        return(
            <div className="card mx-auto" style = {{width: '50%'}}>
                <div className="card-header">
                    <h2>
                        Number of housing: {housing.number}
                    </h2>
                </div>
                <div className="card-body">

                    <h6 className='card-subtitle text-muted'>
                        <AudienceList audiences = {housing.audiences}/>
                    </h6>

                </div>
                <Link to={`/housings/edit/${housing.id}`}>Hui</Link>
                {/*<Link to={`/housings/delete/${housing.id}`}>HuiDel</Link>*/}
            </div>
        )
    }

}

export default Housing