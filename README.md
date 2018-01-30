# (jQuery) albumart.js
Get album arts using Last.fm API

Forked from [lacymorrow/album-art](https://github.com/lacymorrow/album-art) and modified to work on browsers

### Usage
1. Add the script first `<script src="albumart.js"></script>`
2. Call the function
  ```js
    AlbumArt('The Beatles', 'Abbey Road', 'large', function (err, url) {
      console.log(url);
      //=> http://path/to/beatles/abbey_road_large.jpg
    });
  ```
## Read [lacymorrow/album-art](https://github.com/lacymorrow/album-art) for more information
