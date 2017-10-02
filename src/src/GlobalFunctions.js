var request = require('..');


export function uploadImage( name, url){
  request
    .post(url)
    .send( { name: 'Manny' } ) // sends a JSON post body
    .set('X-API-Key', 'foobar')
    .set('accept', 'json')
    .end((err, res) => {
      // Calling the end function will send the request
  });
}
