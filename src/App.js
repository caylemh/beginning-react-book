import React, { Component } from 'react';
import Products from './components/Products';
import UserForm from './components/UserForm';

class App extends Component {
  render() {        
    return (
      <div>
        <UserForm />
        <Products />       
      </div>
    );
  }
}

export default App;