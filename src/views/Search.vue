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
    <Confirm :text="getConfirmText" />
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
      songEntered: null
    };
  },
  methods: {
    handleSearch: function(searchTerm) {
      /**
       * Handle the search based on the query entered by the user.
       */
      this.songEntered = searchTerm;
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
