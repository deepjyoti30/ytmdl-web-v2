<template>
  <div class="playlist--list__container">
    <div class="songs__container my-24">
      <div
        class="playlist-song--headeing flex text-left py-2 font-medium text-gray-600 dark:text-gray-400 border-b dark:border-gray-700"
      >
        <div class="song w-2/5 mr-14">
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
        @coverUpdate="handleCoverUpdate"
      />
    </div>
  </div>
</template>

<script>
import PlaylistSong from "./PlaylistSong.vue";
export default {
  name: "PlaylistSongList",
  components: { PlaylistSong },
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
      allSongsDone: false
    };
  },
  methods: {
    handleCoverUpdate: function(cover) {
      /**
       * Handle the cover update emitted from the child.
       */
      console.log("Update recieved.");
      this.coverList.push(cover["large"]);

      if (this.songs.length == this.coverList.length) this.allSongsDone = true;
    }
  },
  computed: {
    getSongs() {
      return this.songs;
    }
  }
};
</script>
