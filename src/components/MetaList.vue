<template>
  <div class="meta-list__container">
    <Animation v-if="getIsLoading" />
    <MetaResult
      v-else
      v-for="(meta, id) in getMetaResults"
      :key="id"
      :meta="meta"
    />
  </div>
</template>

<script>
import MetaResult from "@/components/MetaResult";
import Animation from "@/components/Animation";

export default {
  name: "MetaList",
  components: {
    MetaResult,
    Animation
  },
  data() {
    return {
      metaUrl: "http://192.168.0.107:5000/v2/metadata",
      fetchedData: null,
      isLoading: false
    };
  },
  props: {
    query: {
      type: String
    }
  },
  methods: {
    searchMetadata: async function() {
      /**
       * Search for metadata using the passed query.
       *
       * If the query is null, don't do anything.
       */
      if (!this.query) return;

      this.isLoading = true;
      const response = await fetch(
        `${this.metaUrl}?${new URLSearchParams({
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
  mounted() {
    this.searchMetadata();
  },
  computed: {
    getMetaResults() {
      return this.fetchedData;
    },
    getIsLoading() {
      return this.isLoading;
    }
  },
  watch: {
    query: {
      handler() {
        this.searchMetadata();
      }
    }
  }
};
</script>
