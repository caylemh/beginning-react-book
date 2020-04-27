import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import UserForm from './components/UserForm';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/edit/:id' component={UserForm} />
              <Route path ='/add' component={UserForm} />
              <Route exact path='/' component={User} />
              <Route path='/*' component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

class NotFound extends Component {
  render() {
    return <div>Page not found!!!</div>
  }
}
