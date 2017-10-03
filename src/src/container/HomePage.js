import React, { Component } from 'react';
import './HomePage.css';
import RaisedButton from 'material-ui/RaisedButton';
import { World } from './world';


export class HomePage extends Component {

  render() {
    return (
      <div id='worldmap'>
        <h1 className='projectTitle'>OmniscentEyeZ</h1>
        <World />
        <RaisedButton
          className='TranslateButton'
          label='Translate Now'
          backgroundColor='#2266BB'
          labelColor='#FFFFFF'
          buttonStyle={ { borderRadius: 25 } }
          style={ { margin: 12, borderRadius: 25 } }
          labelPosition='before'
          containerElement='label'
          onClick={
            () => this.props.beginApplication()
          }
        />
      </div>
    );
  }
}
