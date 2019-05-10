'use strict';

import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Loops1 from './Loops1';
import Loops2 from './Loops2';

export default class AppContainer extends Component {

   constructor(props) {
       super(props);
   }

   render() {
       return (
            <Router>
                <div>
                    <h2>Welcome to React Router Tutorial</h2>

                    <ul>
                        <li><Link to={'/loops1'}>Loops 1</Link></li>
                        <li><Link to={'/loops2'}>Loops 2</Link></li>
                    </ul>

                    <hr />

                    <Switch>
                        <Route exact path='/loops1' component={Loops1} />
                        <Route path='/loops2' component={Loops2} />
                    </Switch>

                </div>
            </Router>
       );
   }
}
