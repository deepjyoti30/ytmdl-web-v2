<template>
  <div class="search__container">
    <SearchBar class="my-8" @search="handleSearch" />
    <div
      v-if="getQuery == null"
      class="write-something py-64 w-2/5 mr-auto ml-auto text-center text-2xl font-semibold"
    >
      You need to enter the name of a song
    </div>
    <div v-else class="results">
      <SongList :query="getQuery" class="mt-24" />
    </div>
    <Confirm ref="confirm" :text="getConfirmText" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import SongList from "@/components/SongList";
import Confirm from "@/components/Confirm";

export default {
  name: "Search",
  components: {
    SearchBar,
    SongList,
    Confirm
  },
  data: () => {
    return {
      songEntered: null,
      videoId: null
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
        this.songEntered = searchData.songEntered;
        return;
      }

      // Else it is an YouTube URL.
      // Check if we need to show the prompt. If we do, show the prompt,
      // rest will be handled accordingly.
      this.videoId = searchData.videoId;
    },
    handleYoutubeUrl: function() {
      /**
       * Handle forwarding the user based on the Youtube URL entered by the
       * user.
       *
       * We need to use the videoId to forward the user to the metadata page.
       */
      this.$router.push({ path: "metadata", query: { videoId: this.videoId } });
    }
  },
  computed: {
    getQuery() {
      return this.songEntered;
    },
    getConfirmText() {
      return `You have entered an YouTube URL. Are you sure you want to continue with the URL ${this.songEntered}`;
    }
  }
};
</script>
