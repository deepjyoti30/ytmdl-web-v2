<template>
  <div class="meta-list__container">
    <MetaResult />
  </div>
</template>

<script>
import MetaResult from "@/components/MetaResult";

export default {
  name: "MetaList",
  components: {
    MetaResult
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
    }
  },
  mounted() {
    this.searchMetadata();
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
