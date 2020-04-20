import React, { Component } from 'react';
import Products from './components/Products';
import Rating from './components/Ratings';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    const isValid = true;

  return (
    <div>
      <Products />
      <Button variant='primary' disabled={!isValid}>Default</Button>
      <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />
    </div>
    );
  }
}

export default App;
