import React, { Component } from 'react';
import Webcam from 'react-webcam';

export class CameraCaptureWrapper extends Component {

  render(){
    return(
      <div>
        <CameraCapture />
      </div>
    );
  }

}

export class CameraCapture extends Component {

  constructor( props ) {
    super( props );
    this.takePicture = this.takePicture.bind( this );
    this.setRef = this.setRef.bind( this );
    this.state = {
      imageUrl: null,
    }
  }

  setRef ( webcam ) {
    this.webcam = webcam;
  }

  takePicture() {
    this.setState( {
      imageUrl: this.webcam.getScreenshot()
    } );
  }

  render(){
    return(
      <div>
        <Webcam
          audio = { false }
          height = { 350 }
          width = { 350 }
          ref = { this.setRef }
          screenShotFormat='image/jpeg'
        />
        <button
          onClick={ () => this.takePicture() }
        >
          Upload
        </button>
        <img src={ this.state.imageUrl } />
      </div>
    );
  }
}
