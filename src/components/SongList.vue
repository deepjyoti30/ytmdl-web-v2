<template>
  <div class="song--list__container">
    <Animation v-if="getIsLoading" />
    <div
      v-else
      class="song__result--wrapper"
      v-for="(song, id) in fetchedData"
      :key="id"
    >
      <infeed-ad v-if="id % 4 == 0" />
      <SongResult :song="song" :query="getQuery" />
    </div>
  </div>
</template>

<script>
import SongResult from "@/components/SongResult";
import Animation from "@/components/Animation";
import InfeedAd from "@/components/InfeedAd";

export default {
  name: "SongList",
  components: {
    SongResult,
    Animation,
    InfeedAd,
  },
  props: {
    query: {
      type: String,
    },
  },
  data: () => {
    return {
      searchUrl: "https://apis.deepjyoti30.dev/v2/ytmdl/search",
      isLoading: true,
      fetchedData: null,
    };
  },
  methods: {
    searchSong: async function () {
      /**
       * Search the song using the API and accordingly show the search results.
       */
      if (!this.query) return;

      this.isLoading = true;

      const response = await fetch(
        `${this.searchUrl}?${new URLSearchParams({
          q: this.query,
        }).toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const jsonData = await response.json();

      this.fetchedData = jsonData;
      this.isLoading = false;
    },
  },
  computed: {
    getFetchedData() {
      return this.fetchedData;
    },
    getIsLoading() {
      return this.isLoading;
    },
    getQuery() {
      return this.query;
    },
  },
  mounted() {
    this.searchSong();
  },
  watch: {
    query: {
      handler() {
        this.searchSong();
      },
    },
  },
};
</script>
