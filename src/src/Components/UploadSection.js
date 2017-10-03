import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import './UploadSection.css';

export class UploadSectionWrapper extends Component {
  render() {
    return(
      <div className='uploadWrapper'>
        <UploadSection/>
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
  }

  onImageDrop(file) {
    this.setState({
      imagesArray: file,
      imageUploaded: true
    });
  }


  render() {
    return (
      <div className='boxZoneContainer'>
        <DropZone
          multiple={false}
          style={ {
            textAlign: 'center',
            borderRadius: '100%',
            width: '50%',
            height: '50%',
          } }
          accept="image/jpg, image/png"
          onDrop={this.onImageDrop.bind(this)}>
          <p>Drag and drop an image here or click to upload an image</p>
        </DropZone>

        {this.state.imageUploaded
          ? <img src={this.state.imagesArray[0].preview} alt="userimage"/>
          : <p>No uploaded image</p>
        }

      </div>
    )
  }
}
