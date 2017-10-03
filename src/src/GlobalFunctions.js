import axios from 'axios';

export function uploadImage(url, setTranslation) {
  var obj = {
    imgSrc: url
  }
  axios.post('http://localhost:3030/images/upload', obj)
  .then( ( response ) => {
    console.log( response );
    setTranslation( response.data.rawText, response.data.transText );
  } )
  .catch( ( error ) => {
    console.log( error );
  });
}
