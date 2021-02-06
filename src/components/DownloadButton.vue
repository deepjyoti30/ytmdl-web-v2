<template>
  <div class="download--btn__container py-4">
    <div class="btn__container">
      <button
        type="button"
        class="text-xl uppercase text-white font-semibold rounded-md shadow-cust"
        :disabled="getIsDownloading"
        @click="startDownload"
      >
        {{ getDownloadText }}
        <span id="progress-bar" class="progress-bar rounded-b-md"></span>
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
      downloadText: "Download"
    };
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
      this.downloadText = "Working!";
      new JsFileDownloader({
        url:
          "http://0.0.0.0:8081/true.detective.s03e01.1080p.bluray.x264-rovers.mkv",
        process: this.showStatus,
        filename: "SongName.mp3"
      })
        .then(() => {
          this.isDownloading = false;
          this.downloadText = "Done!";
        })
        .catch(error => {
          this.isDownloading = false;
          console.log(error);
          this.showError();
        });
    },
    showStatus: function(event) {
      // Show the download status by updating the percentage
      // in the progress bar.
      if (!event.lengthComputable) return; // guard
      var downloadingPercentage = Math.floor(
        (event.loaded / event.total) * 100
      );
      document.getElementById(
        this.progressBarEl
      ).style.width = `${downloadingPercentage}%`;
    },
    showError: function() {
      /**
       * Change the color of the button for a while to show
       * that an error occurred while downloading.
       */
    }
  },
  computed: {
    getIsDownloading() {
      return this.isDownloading;
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

      background: $darkgreen;
      padding: 0.75em 2em;
      transition: 0.2s ease;
      position: relative;
      min-width: 10em;

      &:hover {
        background: darken($darkgreen, 2);
        transition: 0.2s ease;
      }

      .progress-bar {
        transition: 0.5s ease;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 5px;
        width: 0;
        background: $mediumblue;
      }
    }
  }
}
</style>
