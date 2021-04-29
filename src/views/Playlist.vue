<template>
  <div class="playlist__container">
    <div class="playlist--content p-5 md:px-24">
      <playlist-head />
      <playlist-song />
    </div>
  </div>
</template>

<script>
import PlaylistHead from "@/components/playlist/PlaylistHead";
import PlaylistSong from "../components/playlist/PlaylistSong.vue";

export default {
  name: "Playlist",
  components: { PlaylistHead, PlaylistSong },
  computed: {
    id: {
      get() {
        var queryFromRoute = this.$route.query.id;

        if (!queryFromRoute) queryFromRoute = "";
        return queryFromRoute;
      },
      set(value) {
        this.$router.replace({
          query: {
            ...this.$route.query,
            id: value
          }
        });
      }
    }
  }
};
</script>
