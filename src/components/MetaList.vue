<template>
  <div class="meta-list__container">
    <Animation v-if="getIsLoading" />
    <div v-else class="meta__results">
      <MetaResult v-for="(meta, id) in getMetaResults" :key="id" :meta="meta" />
      <div v-if="!getShowAllData" class="show--more--btn my-8">
        <div class="btn--wrapper w-3/5 mr-auto ml-auto text-center">
          <div class="line border mr-auto ml-auto"></div>
          <button
            type="button"
            class="rounded-md md:text-xl font-semibold"
            @click="makeAllDataVisible"
          >
            Show more results
          </button>
        </div>
      </div>
      <div class="or--container text-center">
        <h3 class="text-3xl uppercase mb-8 dark:text-white">or</h3>
        <router-link
          :to="getManualLink"
          tag="button"
          type="button"
          class="rounded-md md:text-xl font-semibold"
        >
          Add meta manually
        </router-link>
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
      metaUrl: "https://ytmdl-api-1.herokuapp.com/v2/ytmdl/metadata",
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
      if (!this.fetchedData) return;
      return this.showAllData ? this.fetchedData : this.fetchedData.slice(0, 5);
    },
    getIsLoading() {
      return this.isLoading;
    },
    getShowAllData() {
      return this.showAllData;
    },
    getManualLink() {
      return { name: "Manual", query: { videoId: this.$route.query.videoId } };
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
        @extend .button-primary;
      }
    }
  }

  .or--container {
    button {
      @extend .button-secondary;
    }
  }
}
</style>
