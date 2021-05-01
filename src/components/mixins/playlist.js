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
      const noSongs = songCovers.length;

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
function buildCoverForNumber(images, number = 4) {
  /**
   * Build the cover for the number of images
   * passed. The maximum allowed number will be 4.
   */
  const numberUrlMap = {
    2: "",
    3: "",
    4: ""
  };

  // Make sure the number is valid
  if (!(number in Object.keys(numberUrlMap)))
    throw `number has to be in ${Object.keys(numberUrlMap)}`;

  // Make sure the images passed are enough for the number
}

export default playlist;
