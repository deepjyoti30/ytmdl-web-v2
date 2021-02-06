<template>
  <div class="metadata__container">
    <SearchBar
      class="my-8"
      @search="handleMetaSearch"
      hideUrlMessage
      :disableAutoSearch="!getAutoSearchMeta"
      :askFormatEach="getAskFormatEach"
    />
    <div
      v-if="!getQuery"
      class="write-something py-64 md:w-2/5 w-11/12 mr-auto ml-auto text-center md:text-2xl text-lg font-semibold dark:text-white"
    >
      Enter a search term for the metadata
    </div>
    <div v-else>
      <MetaList :query="getSongEntered" />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import MetaList from "@/components/MetaList";
import { settings } from "@/components/mixins/settings";

export default {
  name: "Metadata",
  components: {
    SearchBar,
    MetaList
  },
  data() {
    return {
      songEntered: "",
      autoSearchMeta: true
    };
  },
  mixins: [settings],
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
    },
    getAutoSearchMeta() {
      return this.autoSearchMeta;
    },
    getQuery() {
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
    this.autoSearchMeta = this.getSetting("auto-search-meta", true);
  }
};
</script>

<style lang="scss" scoped></style>
