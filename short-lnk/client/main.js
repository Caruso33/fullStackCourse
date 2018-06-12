import {Meteor} from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import Login from '../imports/ui/Login'
import Signup from '../imports/ui/Signup'
import Link from '../imports/ui/Link'
import NotFound from '../imports/ui/NotFound'

const routes = (
  <Router history={ history }>
		<Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/links" component={Link}/>
      <Route path="*" component={NotFound}/>
    </Switch>
 </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
})
