import React, { Component } from 'react';
import { CameraCaptureWrapper } from './CameraCapture.js';
import { UploadSectionWrapper } from './UploadSection.js';
import './OmniscentEyes.css';

export class OmniscentEyes extends Component {

  render() {
    return (
      <div className='omniscentEyesContainer'>
        <CameraCaptureWrapper />
        <UploadSectionWrapper />
      </div>
    );
  }
}
