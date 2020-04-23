import React, { Component } from 'react';
// import Products from './components/Products';
import UserForm from './components/UserForm';
import GitHub from './components/GitHub';
import GitHubUser from './components/GitHubUser';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

class App extends Component {
  render() {        
    return (
      <div>
        <Header /> 
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg='light' expand='lg'>
              <Navbar.Brand>
                <a href="#">React-Bootstrap</a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/github'>GitHub</Nav.Link>
              <Nav.Link href='/userform'>User Form</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path='/github/user/:login/:score' component={GitHubUser} />
            <Route path='/github' component={GitHub} />
            <Route path='/userform' component={UserForm} />
            <Route exact path='/' component={Home} />
            <Route path='/*' component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

class Home extends Component {
  render(){
    return (
      <div>
        Home
      </div>
    )
  }
}

class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}