<template>
  <div class="playlist--list__container">
    <div class="select--controls">
      <playlist-select @clicked="toggleSelectRange" text="Select all songs" />
      <playlist-select
        @clicked="toggleSelectRange"
        :start="0"
        :end="15"
        text="Select first 15 songs"
      />
    </div>
    <div class="songs__container mt-24 mb-8">
      <div
        class="playlist-song--headeing flex text-left py-2 font-medium text-gray-600 dark:text-gray-400 border-b dark:border-gray-700"
      >
        <div class="song w-2/5 mr-24">
          Song
        </div>
        <div class="artist md:block hidden">
          Artist
        </div>
      </div>
      <playlist-song
        v-for="(song, id) in getSongs"
        :key="id"
        :song="song"
        :ref="`song-${id}`"
        @coverUpdate="handleCoverUpdate"
        @selectUpdate="handleSongSelectToggle"
      />
    </div>
  </div>
</template>

<script>
import PlaylistSelect from "./PlaylistSelect.vue";
import PlaylistSong from "./PlaylistSong.vue";
export default {
  name: "PlaylistSongList",
  components: { PlaylistSong, PlaylistSelect },
  props: {
    songs: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data: function() {
    return {
      coverList: [],
      allSongsDone: false,
      selectedSongs: new Set()
    };
  },
  methods: {
    handleCoverUpdate: function(cover) {
      /**
       * Handle the cover update emitted from the child.
       */
      this.coverList.push(cover["cover"]["large"]);

      if (this.songs.length != this.coverList.length) return;

      // If the songs are done, then emit the changes
      this.allSongsDone = true;
      this.$emit("cover", this.coverList);
    },
    handleSongSelectToggle: function(details) {
      /**
       * Handle the selecting of the song that will be
       * emitted from the child.
       *
       * The child needs to emit two things. The ID of the
       * song and the current state.
       *
       * If the state will be select, we'll add it, else remove
       * it.
       */
      // details will be an object
      if (details["toAdd"])
        // Add the song using the ID
        this.selectedSongs.add(details["id"]);
      // Remove the song
      else this.selectedSongs.delete(details["id"]);

      // Now update the value in the parent
      this.updateParentSongCount();
    },
    updateParentSongCount: function() {
      /**
       * Update the song count value in parents data
       */
      this.$parent.songCount = this.selectedSongs.size;
    },
    toggleSelectAllSongs: function(isChecked) {
      /**
       * Select/Unselect all the songs available.
       *
       * This method is to be used when the select all songs
       * button is used.
       */
      this.songs.forEach((element, index) => {
        // Use the index to get the ref
        this.$refs[`song-${index}`][0].updateIsSelected(isChecked);
      });
    },
    toggleSelectRange: function(details) {
      /**
       * Select just the range of songs as passed.
       */
      const start = details.start;
      const end = details.end;
      var songs = this.songs;

      if (start != -1 && end != -1) songs = songs.slice(start, end);

      songs.forEach((element, index) => {
        // Use the index to get the ref
        this.$refs[`song-${index}`][0].updateIsSelected(details.isChecked);
      });
    }
  },
  computed: {
    getSongs() {
      return this.songs;
    }
  }
};
</script>
