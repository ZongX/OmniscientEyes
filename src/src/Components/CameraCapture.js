import React, { Component } from 'react';
import Webcam from 'react-webcam';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import './CameraCapture.css';

export class CameraCaptureWrapper extends Component {

  render(){
    return(
      <div className='camerawrapper'>
        <CameraCapture />
      </div>
    );
  }

}

export class CameraCapture extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      imageUrl: null,
      showPicture: false,
    }

    this.takePicture = this.takePicture.bind( this );
    this.setRef = this.setRef.bind( this );
    this.openPictureDialog = this.openPictureDialog.bind( this );
    this.closePictureDialog = this.closePictureDialog.bind( this );
    this.uploadPicture = this.uploadPicture.bind( this );
  }

  openPictureDialog() {
    this.setState( { showPicture: true } );
  }

  closePictureDialog() {
    this.setState( { showPicture: false } );
  }

  setRef ( webcam ) {
    this.webcam = webcam;
  }

  takePicture() {
    this.setState( {
      imageUrl: this.webcam.getScreenshot()
    } );
  }

  uploadPicture(){

  }

  render(){
    return(
      <div>
        <div className='cameracapturecontainer'>
          <Webcam
            audio = { false }
            height = { 350 }
            width = { 350 }
            ref = { this.setRef }
            screenShotFormat='image/jpeg'
            style={ { textAlign: 'center' } }
          />
        </div>
        <RaisedButton
          className='picCaptureButton'
          label='Take Picture'
          labelColor='white'
          backgroundColor='#2266BB'
          buttonStyle={ { borderRadius: 25 } }
          style={ { margin: 12, borderRadius: 25 } }
          onClick={ () => {
            this.takePicture();
            this.openPictureDialog();
           } }
        />
        <Dialog
          title='Screenshot'
          actions={ [
            <FlatButton
              label='Upload'
              primary={ true }
              onClick={ () => {
                this.uploadPicture();
                this.closePictureDialog();
               } }
            />,
            <FlatButton
              label='Cancel'
              primary={ true }
              onClick={ this.closePictureDialog }
            />,
          ] }
          modal={ false }
          open={ this.state.showPicture }
          onRequestClose={ this.closePictureDialog }
        >
          <img src={ this.state.imageUrl } />
        </Dialog>
      </div>
    );
  }
}
