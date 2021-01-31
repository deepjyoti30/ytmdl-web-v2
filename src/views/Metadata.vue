<template>
  <div class="metadata__container">
    <SearchBar class="my-8" @search="handleMetaSearch" hideUrlMessage />
    <MetaList :query="getSongEntered" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import MetaList from "@/components/MetaList";

export default {
  name: "Metadata",
  components: {
    SearchBar,
    MetaList
  },
  data() {
    return {
      songEntered: ""
    };
  },
  computed: {
    videoId: {
      get() {
        var queryFromRoute = this.$route.query.videoId;

        if (!queryFromRoute) queryFromRoute = null;
        return queryFromRoute;
      },
      set(value) {
        this.$router.replace({
          query: {
            ...this.$route.query,
            videoId: value
          }
        });
      }
    },
    getSongEntered() {
      return this.songEntered;
    }
  },
  methods: {
    handleMetaSearch: function(searchObject) {
      /**
       * Handle the search term entered by the user.
       */
      this.songEntered = searchObject.song;
    }
  },
  created() {
    if (!this.videoId) this.$router.push({ path: "search" });
  }
};
</script>

<style lang="scss" scoped></style>
