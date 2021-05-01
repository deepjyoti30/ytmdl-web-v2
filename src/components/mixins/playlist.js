const playlist = {
  data() {
    return {};
  },
  methods: {
    buildPlaylistCover: function(songCovers) {
      /**
       * Build the cover for the playlist by using the
       * cover of different songs available in the playlist.
       *
       * We will try to include 4 songs from the playlist. However
       * if 4 are not present, we will have to go for 3 or 2 and
       * finally falling back to just one.
       */
      const noSongs = songCovers.length();

      switch (noSongs) {
        case 1:
          return songCovers[0]["large"];
        case 2:
          return buildCoverForNumber(songCovers.slice(0, 2), 2);
        case 3:
          return buildCoverForNumber(songCovers.slice(0, 3), 3);
        default:
          return buildCoverForNumber(songCovers.slice(0, 4));
      }
    }
  }
};

// Private functions for the mixin

function buildCoverFor3(images) {
  /**
   * Build the cover for 3 images as the cover.
   */
  return (
    `https://res.cloudinary.com/dgmhgpu79/image/fetch/c_thumb,h_320,w_200/c_thumb,h_160,l_fetch:${btoa(
      images[1]
    )}` +
    `,w_200/fl_layer_apply,g_north_west,x_200/c_thumb,h_160,l_fetch:${btoa(
      images[2]
    )}` +
    `,w_200/fl_layer_apply,g_north_west,y_160,x_200/${images[0]}`
  );
}

function buildCoverFor2(images) {
  /**
   * Build the cover for 2 images as the cover
   */
  return (
    `https://res.cloudinary.com/deepjyoti30/image/` +
    `fetch/c_thumb,h_320,w_200/c_thumb,h_320,l_fetch:${btoa(images[1])}` +
    `,w_200/fl_layer_apply,g_north_west,x_200/${images[0]}`
  );
}

function buildCoverForNumber(images, number = 4) {
  /**
   * Build the cover for the number of images
   * passed. The maximum allowed number will be 4.
   */
  const numberUrlMap = {
    2: buildCoverFor2,
    3: buildCoverFor3,
    4: ""
  };

  // Make sure the number is valid
  if (!(number in Object.keys(numberUrlMap)))
    throw `number has to be in ${Object.keys(numberUrlMap)}`;

  // Make sure the images passed are enough for the number
  if (number > images.length())
    throw `images should be equivalent or more than the number`;

  // Build the cover now.
  return numberUrlMap[number](images);
}

export default playlist;
