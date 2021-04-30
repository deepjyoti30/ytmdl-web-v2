<template>
  <div class="playlist--list__container">
    <div class="songs__container my-24">
      <playlist-song v-for="(song, id) in [1, 2, 3, 4, 5]" :key="id" />
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
  }
};
</script>
