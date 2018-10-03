import  React, {Component} from 'react'
import Audience from '../Audience'
import './style.css'

class AudienceList extends Component{

    render() {
        const {audiences} = this.props;
        const audienceElements = audiences.map(audience =>
            <li key = {audience.number} className='audience-list__li'>
                <Audience audience = {audience}/>
            </li>
        );

        return (
            <ul>
                {audienceElements}
            </ul>
        )
    }
}

export default AudienceList