<template>
  <div class="metadata__container">
    <SearchBar class="my-8" @search="handleMetaSearch" hideUrlMessage />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";

export default {
  name: "Metadata",
  components: {
    SearchBar
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
    }
  },
  methods: {
    handleMetaSearch: function(searchTerm) {
      /**
       * Handle the search term entered by the user.
       */
      this.songEntered = searchTerm;
    }
  },
  created() {
    if (!this.videoId) this.$router.push({ path: "search" });
  }
};
</script>

<style lang="scss" scoped></style>
