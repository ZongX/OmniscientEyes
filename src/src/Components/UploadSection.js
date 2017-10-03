import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import { uploadImage } from '../GlobalFunctions.js';
import './UploadSection.css';

export class UploadSectionWrapper extends Component {
  render() {
    return(
      <div className='uploadWrapper'>
        <UploadSection { ...this.props }/>
      </div>
    );
  }
}
export class UploadSection extends Component {
  constructor(props){
    super(props);

    this.state = {
      imageUploaded: false,
      imagesArray: null
    }

    this.onImageDrop = this.onImageDrop.bind( this );
  }

  onImageDrop(file) {
    this.setState({
      imagesArray: file,
      imageUploaded: true
    });
    file.forEach( file => uploadImage( file, this.props.setTranslation ) );
  }


  render() {
    return (
      <div className='boxZoneContainer'>
        <DropZone
          multiple={ false }
          style={ {
            textAlign: 'center',
            borderRadius: '100%',
            width: '50%',
            height: '50%',
          } }
          accept="image/jpg, image/png"
          onDrop={ ( file ) => this.onImageDrop( file ) }>
          <p>Drag and drop an image here or click to upload an image</p>
        </DropZone>

        {this.state.imageUploaded
          ? <img style={ { marginLeft: '-50%' } } src={this.state.imagesArray[0].preview} alt="userimage"/>
        : <p style={ { marginLeft: '-50%' } }>No uploaded image</p>
        }

      </div>
    )
  }
}
