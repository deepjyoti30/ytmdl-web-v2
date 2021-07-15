<template>
  <div class="playlist__container">
    <div v-if="getStatus == 'loading'" class="loading--content">
      <animation text="Fetching playlist details for you" />
    </div>
    <div v-else-if="getStatus == 'error'" class="error--content">
      <error
        :error="getError"
        message="It might be that the playlist you're trying to fetch is private or does not exist"
      />
    </div>
    <div
      v-else
      class="playlist--content p-5 md:px-24 2xl:w-3/5 xl:w-4/5 w-full mr-auto ml-auto relative"
    >
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
import Animation from "../components/Animation.vue";
import Error from "../components/Error.vue";

import error from "@/components/mixins/errors";

export default {
  name: "Playlist",
  components: {
    PlaylistHead,
    PlaylistSongList,
    Animation,
    Error
  },
  mixins: [error],
  data: function() {
    return {
      plData: null,
      status: "loading",
      endpoint: "http://0.0.0.0:5000/v2/playlist",
      covers: null,
      errorDetails: null
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
    },
    getStatus() {
      return this.status;
    },
    getError() {
      return this.errorDetails;
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

      // Extract the response status
      const code = response.status;
      const message = response.statusText;

      if (code == 200) {
        this.status = message.toLowerCase();
        return;
      }

      // Else extract the error details
      this.errorDetails = this.extractErrorDetails(response, jsonData);
      this.status = "error";
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
