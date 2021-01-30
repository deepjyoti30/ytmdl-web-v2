<template>
  <div class="song--list__container">
    <Animation v-if="getIsLoading" />
    <SongResult
      v-else
      v-for="(song, id) in fetchedData"
      :key="id"
      :song="song"
      :query="getQuery"
    />
  </div>
</template>

<script>
import SongResult from "@/components/SongResult";
import Animation from "@/components/Animation";

export default {
  name: "SongList",
  components: {
    SongResult,
    Animation
  },
  props: {
    query: {
      type: String
    }
  },
  data: () => {
    return {
      searchUrl: "http://192.168.0.107:5000/v2/search",
      isLoading: true,
      fetchedData: null
    };
  },
  methods: {
    searchSong: async function() {
      /**
       * Search the song using the API and accordingly show the search results.
       */
      if (!this.query) return;

      this.isLoading = true;

      const response = await fetch(
        `${this.searchUrl}?${new URLSearchParams({
          q: this.query
        }).toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const jsonData = await response.json();

      this.fetchedData = jsonData;
      this.isLoading = false;
    }
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
    }
  },
  mounted() {
    this.searchSong();
  },
  watch: {
    query: {
      handler() {
        this.searchSong();
      }
    }
  }
};
</script>
