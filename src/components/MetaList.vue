<template>
  <div class="meta-list__container">
    <Animation v-if="getIsLoading" />
    <div v-else class="meta__results">
      <MetaResult
        v-for="(meta, id) in getMetaResults"
        :key="id"
        :meta="meta"
        :askFormatEach="getAskFormatEach"
      />
      <div v-if="!getShowAllData" class="show--more--btn mt-8 mb-24">
        <div class="btn--wrapper w-3/5 mr-auto ml-auto text-center">
          <div class="line border mr-auto ml-auto"></div>
          <button
            type="button"
            class="border py-4 px-12 rounded-md text-xl font-semibold strip-button"
            @click="makeAllDataVisible"
          >
            Show more results
          </button>
        </div>
      </div>
    </div>
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
      isLoading: false,
      showAllData: false
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
    },
    makeAllDataVisible: function() {
      // Make all the data visible by making the variable valid
      this.showAllData = true;
    }
  },
  mounted() {
    this.searchMetadata();
  },
  computed: {
    getMetaResults() {
      return this.showAllData ? this.fetchedData : this.fetchedData.slice(0, 5);
    },
    getIsLoading() {
      return this.isLoading;
    },
    getAskFormatEach() {
      return this.$parent.getAskFormatEach;
    },
    getShowAllData() {
      return this.showAllData;
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

<style lang="scss" scoped>
.meta__results {
  .show--more--btn {
    .btn--wrapper {
      $color: lighten($mediumblue, 5);

      .line {
        width: 0px;
        height: 4rem;
        border-color: lighten($color, 40);
        background: $color;
      }

      button {
        background: $color;
        color: white;
        transition: 0.2s ease;

        &:hover {
          transition: 0.2s ease;
          background: darken($color, 5);
        }
      }
    }
  }
}
</style>
