<template>
  <div class="download--btn__container py-4">
    <div class="btn__container">
      <button
        type="button"
        class="text-xl uppercase text-white font-semibold rounded-md shadow-cust"
        :disabled="getIsBtnDisabled"
        @click="startDownload"
        title="Click to download the song"
      >
        {{ getDownloadText }}
        <span
          id="progress-bar"
          class="progress-bar"
          :class="[getIsDownloading ? '' : 'hidden']"
        ></span>
      </button>
    </div>
  </div>
</template>

<script>
import JsFileDownloader from "js-file-downloader";

export default {
  name: "DownloadButton",
  data() {
    return {
      isDownloading: false,
      progressBarEl: "progress-bar",
      downloadText: "Download",
      isUrlExpired: false
    };
  },
  props: {
    downloadDetails: {
      type: Object
    }
  },
  methods: {
    startDownload: function() {
      /**
       * Start the download when the user clicks on the download button.
       *
       * We need to start downloading and updating the progress
       * bar by using the showStatus method.
       */
      this.isDownloading = true;
      this.downloadText = "Working";
      new JsFileDownloader({
        url: this.downloadDetails.url,
        process: this.showStatus,
        filename: this.downloadDetails.filename
      })
        .then(() => {
          this.isDownloading = false;
          this.downloadText = "Done";
          this.disableDownload();
        })
        .catch(error => {
          this.downloadText = "Error";
          this.showError(error);
        });
    },
    showStatus: function(event) {
      // Show the download status by updating the percentage
      // in the progress bar.
      if (!event.lengthComputable) return;

      var downloadingPercentage = Math.floor(
        (event.loaded / event.total) * 100
      );
      document.getElementById(
        this.progressBarEl
      ).style.width = `${downloadingPercentage}%`;
    },
    showError: function(error) {
      /**
       * Change the color of the button for a while to show
       * that an error occurred while downloading.
       */
      console.log("Error occurred while downloading", error);
      console.log("If you can see this error, report it!");

      // Change the color of the progress bar.
      const progressBar = document.getElementById(this.progressBarEl);
      progressBar.style.width = "100%";
      progressBar.style.background = "#E57373";

      setTimeout(() => {
        progressBar.style.background = "#3D5A80";
        progressBar.style.width = "0";
        this.isDownloading = false;
        this.downloadText = "Try Again";
      }, 10000);
    },
    disableDownload: function() {
      /**
       * Start the timer in order to make sure the download button is not
       * accessed once the URL is expired.
       */
      setTimeout(() => {
        this.isUrlExpired = true;
      }, this.downloadDetails["expires_in"] * 1000);
    }
  },
  computed: {
    getIsDownloading() {
      return this.isDownloading;
    },
    getIsBtnDisabled() {
      return this.isDownloading || this.isUrlExpired;
    },
    getDownloadText() {
      return this.downloadText;
    }
  }
};
</script>

<style lang="scss" scoped>
.download--btn__container {
  .btn__container {
    button {
      @extend .strip-button;
      $color: $darkgreen;

      background: $color;
      padding: 0.75em 2em;
      transition: 0.2s ease;
      position: relative;
      min-width: 10em;

      &:hover {
        background: darken($color, 2);
        transition: 0.2s ease;
      }

      &:disabled {
        cursor: not-allowed;
      }

      .progress-bar {
        transition: 0.5s ease;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 5px;
        width: 0;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        background: $mediumblue;
      }
    }
  }
}
</style>
