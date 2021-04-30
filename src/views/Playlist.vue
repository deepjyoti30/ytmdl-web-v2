<template>
  <div class="playlist__container">
    <div class="playlist--content p-5 md:px-24 md:w-3/5 w-full mr-auto ml-auto">
      <playlist-head
        v-if="status.toLowerCase() == 'ok'"
        :playlistData="getPlaylistData"
      />
      <playlist-song-list
        v-if="status.toLowerCase() == 'ok'"
        :songs="getSongs"
      />
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
      status: "loading",
      endpoint: "http://0.0.0.0:5000/v2/playlist"
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
    },
    getPlaylistData() {
      return this.plData;
    },
    getSongs() {
      return this.plData["songs"];
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
      this.status = response.statusText;
    }
  },
  mounted() {
    this.fetchPlaylistDetails();
  }
};
</script>
