<template>
  <div class="playlist--list__container">
    <div class="songs__container mt-24">
      <playlist-song v-for="(song, id) in [1, 2, 3, 4, 5]" :key="id" />
    </div>
  </div>
</template>

<script>
import PlaylistSong from "./PlaylistSong.vue";
export default {
  components: { PlaylistSong },
  name: "PlaylistSongList"
};
</script>
