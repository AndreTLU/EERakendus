import React from 'react';
import {render} from 'react-dom';
import {Route, Switch, BrowserRouter, browserHistory} from 'react-router-dom';

import Home from './components/Home';
import AddForm from './components/AddForm';
import User from './components/User';

render(
    <BrowserRouter history={browserHistory}>
      <div id='content-wrapper'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/add' component={AddForm}/>
          <Route path='/user/:id' component={User}/>
        </Switch>
      </div>
    </BrowserRouter>,document.querySelector('#main')
)