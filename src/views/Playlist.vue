<template>
  <div class="playlist__container">
    <div class="playlist--content p-5 md:px-24 md:w-3/5 w-full mr-auto ml-auto">
      <playlist-head
        v-if="status.toLowerCase() == 'ok'"
        :playlistData="getPlaylistData"
        :playlistCover="getCovers"
      />
      <playlist-song-list
        v-if="status.toLowerCase() == 'ok'"
        :songs="getSongs"
        @cover="handleCovers"
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
      endpoint: "http://0.0.0.0:5000/v2/playlist",
      covers: null
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
    },
    getCovers() {
      return this.covers;
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
    },
    handleCovers: function(coverList) {
      /**
       * Handle the event that sends an array of all the covers
       * for the songs fetched.
       *
       * This array needs to be passed to the playlist head.
       */
      this.covers = coverList;
    }
  },
  mounted() {
    this.fetchPlaylistDetails();
  }
};
</script>
