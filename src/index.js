import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

import { BrowserRouter } from 'react-router-dom';

import data from './data-mock/data';

render((
    <BrowserRouter>
        <App housings={data} />
    </BrowserRouter>

), document.getElementById('root'));
