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
       */
      if (!searchData.isYoutube) {
        this.songEntered = searchData.song;
        return;
      }

      // Else it is an YouTube URL.
      // Check if we need to show the prompt. If we do, show the prompt,
      // rest will be handled accordingly.
      this.videoId = searchData.videoId;

      // Set the extracted title
      this.songEntered = searchData.song;

      if (!this.skipPrompt) {
        this.$refs.confirm.$refs.modal.showModal();
        return;
      }

      // Else just forward the user to next page
      this.handleYoutubeUrl();
    },
    handleYoutubeUrl: function() {
      /**
       * Handle forwarding the user based on the Youtube URL entered by the
       * user.
       *
       * We need to use the videoId to forward the user to the metadata page.
       */
      this.$router.push({
        path: "metadata",
        query: { videoId: this.videoId, query: this.songEntered }
      });
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
