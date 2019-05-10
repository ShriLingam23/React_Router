'use strict';

import React from 'react';
import {render} from 'react-dom';
// import { BrowserRouter } from 'react-router-dom'

import AppContainer from './AppContainer';

render(<AppContainer/>,document.getElementById('app'))

// render((<BrowserRouter>
//             <AppContainer/>
//         </BrowserRouter>
//     ),document.getElementById('app'));