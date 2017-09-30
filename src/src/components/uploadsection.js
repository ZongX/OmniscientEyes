import React from 'react';
import DropZone from 'react-dropzone';

export default class UploadSection extends React.Component {
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
      <div>
        <DropZone
          multiple={false}
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
