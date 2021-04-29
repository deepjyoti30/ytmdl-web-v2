<template>
  <div class="playlist__container">
    <div class="playlist--content p-5 md:px-24">
      <playlist-head />
    </div>
  </div>
</template>

<script>
import PlaylistHead from "@/components/PlaylistHead";

export default {
  name: "Playlist",
  components: { PlaylistHead },
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
