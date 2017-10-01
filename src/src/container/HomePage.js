import React, { Component } from 'react';
import './HomePage.css';
import { Button } from 'react-bootstrap';
import { World } from './world';


export class HomePage extends Component {
  render() {
    return (
      <div id='worldmap'>
        <Button bsStyle='primary' bsSize='large' block>Translate Now</Button>
        <World />
      </div>
    );
  }
}
