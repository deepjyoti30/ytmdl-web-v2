<template>
  <div class="search__container">
    <SearchBar class="my-8" @search="handleSearch" />
    <div
      v-if="getQuery == null"
      class="write-something py-32 md:w-2/5 w-11/12 mr-auto ml-auto text-center md:text-2xl text-lg font-semibold dark:text-white"
    >
      You need to enter the name of a song
      <div class="ad--container--wrapper mt-8">
        <Ad />
      </div>
    </div>
    <div v-else class="results">
      <SongList :query="getQuery" class="mt-24" />
    </div>
    <Confirm
      ref="confirm"
      :text="getConfirmText"
      continueText="Yess!"
      @continue="handleYoutubeUrl"
    />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import SongList from "@/components/SongList";
import Confirm from "@/components/Confirm";
import Ad from "@/components/Ad";
import { settings } from "@/components/mixins/settings";

export default {
  name: "Search",
  components: {
    SearchBar,
    SongList,
    Confirm,
    Ad
  },
  mixins: [settings],
  data: () => {
    return {
      songEntered: null,
      videoId: null,
      skipPrompt: false,
      confirmText: ""
    };
  },
  methods: {
    handleSearch: function(searchData) {
      /**
       * Handle the search based on the query entered by the user.
       *
       * We need to check if the search term is an youtube URL or not.
       * If it is an YouTube URL, accordingly forward the user to the
       * next page. Else show some search results.
       *
       * If it is a playlist URL then we need to redirect to the playlist
       * route.
       *
       * Else just show some results.
       */
      switch (true) {
        case searchData.isPlaylist:
          // Forward to the playlist endpoint
          this.handlePlaylistUrl(searchData.playlistId);
          break;
        case searchData.isYoutube:
          // Check if we need to show the prompt. If we do, show the prompt,
          // rest will be handled accordingly.
          this.videoId = searchData.videoId;

          if (!this.skipPrompt) {
            this.$refs.confirm.$refs.modal.showModal();
            return;
          }

          // Else just forward the user to next page
          this.handleYoutubeUrl();
          break;
        default:
          this.songEntered = searchData.song;
      }
    },
    handleYoutubeUrl: function() {
      /**
       * Handle forwarding the user based on the Youtube URL entered by the
       * user.
       *
       * We need to use the videoId to forward the user to the metadata page.
       */
      this.$router.push({ path: "metadata", query: { videoId: this.videoId } });
    },
    handlePlaylistUrl: function(playlistId) {
      /**
       * Handle forwarding the user to the playlist page if they have
       * entered a playlist URL.
       */
      this.$router.push({ path: "playlist", query: { id: playlistId } });
    }
  },
  computed: {
    getQuery() {
      return this.songEntered;
    },
    getConfirmText() {
      return `You have entered an YouTube URL. Are you sure you want to continue with the URL you entered?`;
    }
  },
  created() {
    this.skipPrompt = this.getSetting("skip-url-input", true);
  }
};
</script>
