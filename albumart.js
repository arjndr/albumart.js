function AlbumArt(artist, album, size, cb) {
  if (typeof artist !== 'string') {
    throw new Error('Expected a string');
  }
  if (typeof album === 'function') {
    cb = album;
    album = size = null;
  } else if (typeof size === 'function') {
    cb = size;
    size = null;
  }
  var data = '';
  var sizes = ['small', 'medium', 'large', 'extralarge', 'mega'];
  var method = (album === null) ? 'artist' : 'album';
  var apiKey = '4cb074e4b8ec4ee9ad3eb37d6f7eb240';
  var artist = artist.replace("&", "and").replace(/\b \b/g,'+');
  if (album !== null) {
    album = album.replace(/\b \b/g, '+');
  }
  $.ajax({
    type: "GET",
    url: 'http://ws.audioscrobbler.com/2.0/?method=' + method + '.getinfo&api_key=' + apiKey + '&artist=' + artist + '&album=' + album + '&format=json',
    success: function (data) {
      console.log(data);
      var json = data;
      if (typeof (json.error) !== 'undefined') {
        // Error
        return cb('JSON Error: ' + json.message, '');
      } else if (sizes.indexOf(size) !== -1 && json[method] && json[method].image) {
        // Return image in specific size
        json[method].image.forEach(function (e, i) {
          if (e.size === size) {
            cb(null, e['#text']);
          }
        });
      } else if (json[method] && json[method].image) {
        // Return largest image
        var i = json[method].image.length - 2;
        cb(null, json[method].image[i]['#text']);
      } else {
        // No image art found
        cb('Error: No image found.', '');
      }
    },
    dataType: 'jsonp',
  });
};
