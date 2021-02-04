<template>
  <div class="download__container">
    <div class="md:w-3/5 w-10/12 mr-auto ml-auto md:my-32 my-16">
      <h2
        class="text-3xl font-semibold text-center md:mb-24 mb-16 text-gray-600 dark:text-gray-400"
      >
        Your song is ready!
      </h2>
      <DownloadResult />
    </div>
  </div>
</template>

<script>
import DownloadResult from "@/components/DownloadResult";
import { settings } from "@/components/mixins/settings";

export default {
  name: "Download",
  mixins: [settings],
  components: {
    DownloadResult
  },
  props: {
    metaDetails: {
      type: Object
    }
  },
  data() {
    return {
      format: null,
      isLoading: false,
      downloadUrl: "http://192.168.0.107:5000/v2/download",
      downloadDetail: null
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
    }
  },
  computed: {
    getTitle() {
      return this.metaDetails.name;
    },
    getFormat() {
      return this.format;
    }
  },
  mounted() {
    this.downloadSong();
  },
  created() {
    this.format = this.getSetting("format");
  }
};
</script>
