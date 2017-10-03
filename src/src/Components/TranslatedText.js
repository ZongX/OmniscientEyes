import React, { Component } from 'react';
import './TranslatedText.css';

export class TranslationsWrapper extends Component {
  render() {
    return(
      <div>
        <Translations { ...this.props }/>
      </div>
    );
  }
}
export class Translations extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className='translationsWrapper'>
        <div className='originalTextWrapper'>
          <h2>Original Text</h2>
          { this.props.originalText }
        </div>
        <div className='translatedTextWrapper'>
          <h2>Translated Text</h2>
          { this.props.translatedText }
        </div>
      </div>
    )
  }
}
