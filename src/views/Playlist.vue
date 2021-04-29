<template>
  <div class="playlist__container">
    <div class="playlist--content p-5 md:px-24 md:w-3/5 w-full mr-auto ml-auto">
      <playlist-head />
      <playlist-song-list />
    </div>
  </div>
</template>

<script>
import PlaylistHead from "@/components/playlist/PlaylistHead";
import PlaylistSongList from "../components/playlist/PlaylistSongList.vue";

export default {
  name: "Playlist",
  components: {
    PlaylistHead,
    PlaylistSongList
  },
  data: function() {
    return {
      plData: null,
      endpoint: "http://0.0.0.0:5000/playlist"
    };
  },
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
  },
  methods: {
    fetchPlaylistDetails: async function() {
      /**
       * Fetch the playlist details using the endpoint.
       *
       * We need to pass proper details to all the sub
       * components based on the response of the API.
       */
      const response = await fetch(`${this.endpoint}/${this.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const jsonData = await response.json();

      this.plData = jsonData;
    }
  },
  mounted() {
    this.fetchPlaylistDetails();
  }
};
</script>
