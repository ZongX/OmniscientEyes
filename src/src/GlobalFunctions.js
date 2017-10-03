import axios from 'axios';

export function uploadImage( name, url) {
  axios.post('/images/upload',
    url
  )
  .then( ( response ) => {
    console.log( response )
  } )
  .catch( ( error ) => {
    console.log( error );
  });
}
