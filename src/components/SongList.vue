<template>
  <div class="song--list__container">
    <SongResult v-for="(song, id) in fetchedData" :key="id" :song="song" />
  </div>
</template>

<script>
import SongResult from "@/components/SongResult";

export default {
  name: "SongList",
  components: {
    SongResult
  },
  props: {
    query: {
      type: String
    }
  },
  data: () => {
    return {
      searchUrl: "http://localhost:5000/v2/search?q=",
      isLoading: true,
      fetchedData: null
    };
  },
  methods: {
    searchSong: async function() {
      /**
       * Search the song using the API and accordingly show the search results.
       */
      const response = await fetch(`${this.searchUrl}${this.query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const jsonData = await response.json();

      this.fetchedData = jsonData;
    }
  },
  computed: {
    getFetchedData() {
      return this.fetchedData;
    }
  },
  mounted() {
    this.searchSong();
  }
};
</script>
