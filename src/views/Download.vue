<template>
  <div class="download__container">
    <Animation v-if="getIsLoading" class="md:mt-24" />
    <div v-else class="md:w-3/5 w-10/12 mr-auto ml-auto md:my-32 my-16">
      <h2
        class="text-3xl font-semibold text-center md:mb-24 mb-16 text-gray-600 dark:text-gray-400"
      >
        Your song is ready!
      </h2>
      <DownloadResult
        :downloadDetails="getDownloadDetails"
        :metaDetails="getMetaDetails"
      />
      <div id="show-support-wrapper">
        <transition name="fade-in">
          <show-support id="show-support-content" v-if="getShowDonate" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import DownloadResult from "@/components/DownloadResult";
import ShowSupport from "@/components/ShowSupport";
import Animation from "@/components/Animation";
import { settings } from "@/components/mixins/settings";

export default {
  name: "Download",
  mixins: [settings],
  components: {
    DownloadResult,
    Animation,
    ShowSupport
  },
  props: {
    metaDetails: {
      type: Object
    }
  },
  data() {
    return {
      format: null,
      isLoading: true,
      downloadUrl: "https://ytmdlapi.herokuapp.com/download",
      downloadDetail: null,
      showDonate: false
    };
  },
  methods: {
    buildRequestBody: function() {
      /**
       * Build the request body based on the details passed by
       * the route. We need to make sure all the details are
       * properly passed in order to download the right song.
       */
      const data = {};
      data["song"] = {
        video_id: this.$route.query.videoId,
        format: this.format
      };
      data["metadata"] = this.metaDetails;

      return data;
    },
    downloadSong: async function() {
      /**
       * Download the song based on the details selected by the user.
       */
      if (!this.metaDetails) return;

      this.isLoading = true;

      const response = await fetch(this.downloadUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.buildRequestBody())
      });
      const responseJson = await response.json();

      this.isLoading = false;
      this.downloadDetail = responseJson;
    },
    handleShowSupport: function() {
      /**
       * Handle showing the donate buttons.
       *
       * We need to show them and scroll that div into view.
       */
      this.showDonate = true;

      const el = document.getElementById("show-support-wrapper");

      if (!el) return;
      el.scrollIntoView({ behavior: "smooth" });
    }
  },
  computed: {
    getTitle() {
      return this.metaDetails.name;
    },
    getDownloadDetails() {
      return this.downloadDetail;
    },
    getMetaDetails() {
      return this.metaDetails;
    },
    getIsLoading() {
      return this.isLoading;
    },
    getShowDonate() {
      return this.showDonate;
    }
  },
  mounted() {
    this.downloadSong();
  },
  created() {
    if (!this.metaDetails) this.$router.push({ name: "Home" });
    this.format = this.getSetting("format");
  }
};
</script>

<style lang="scss" scoped>
.fade-in-enter {
  opacity: 0;
  transform: translateY(-5rem);
}

.fade-in-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-enter-active {
  transition: opacity 500ms ease;
}
</style>
