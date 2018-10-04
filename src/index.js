import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

import data from './data-mock/data';

render((
    <App housings={data} />
), document.getElementById('root'));


// Housing
// HousingList
// HousingForm
// Audience
// AudienceList
// AudienceSummary
// HousingSummary
// ConfirmModal
