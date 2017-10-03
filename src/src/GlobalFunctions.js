import axios from 'axios';

export function uploadImage(url) {
  var obj = {
    imgSrc: url
  }
  axios.post('http://localhost:3030/images/upload', obj)
  .then( ( response ) => {
    console.log( response )
  } )
  .catch( ( error ) => {
    console.log( error );
  });
}
