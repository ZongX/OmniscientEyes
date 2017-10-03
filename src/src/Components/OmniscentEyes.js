import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CameraCaptureWrapper } from './CameraCapture.js';
import { UploadSectionWrapper } from './UploadSection.js';
import { TranslationsWrapper } from './TranslatedText.js';
import './OmniscentEyes.css';

export class OmniscentEyes extends Component {
  constructor( props ) {
    super(  props );

    this.state={
      originalText: 'No Original Text',
      translatedText: 'No Text Translated',
      isTextTranslated: false,
    }

    this.setTranslation = this.setTranslation.bind( this );
  }

  setTranslation( ogText, newText ){
    this.setState( {
      originText: ogText,
      translatedText: newText,
      isTextTranslated: true,
    } );
  }
  render() {
    return (
      <div>
        <div className='omniscentEyesContainer'>
          <CameraCaptureWrapper />
          <UploadSectionWrapper />
        </div>
        <ReactCSSTransitionGroup
          transitionName='slideTranslations'
          transitionEnterTimeout={ 2000 }
          transitionLeaveTimeout={ 2000 }
        >
          { ( this.state.isTextTranslated )?
            <TranslationsWrapper
              translatedText={ this.state.translatedText}
              originalText={ this.state.originalText } />:
            null
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
