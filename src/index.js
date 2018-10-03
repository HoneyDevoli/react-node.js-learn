import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {BrowserRouter} from 'react-router-dom'
import data from './data';

render((
    <BrowserRouter>
        <App data={data}/>
    </BrowserRouter>
), document.getElementById('root'));