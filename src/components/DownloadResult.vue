<template>
  <div class="download--result__container md:flex">
    <div class="cover--img md:w-2/5 w-full">
      <img
        :src="getCover"
        :alt="getTitle"
        :title="getImageTitle"
        loading="lazy"
        class="rounded-md shadow-2xl"
      />
    </div>
    <div class="download--details py-12 md:px-12 px-2 md:w-3/5 w-full">
      <h1 class="title font-bold md:text-4xl text-3xl dark:text-white">
        {{ getTitle }}
      </h1>
      <h3
        class="artist md:text-3xl text-2xl font-medium mt-6 text-gray-700 dark:text-gray-200"
      >
        {{ getArtist }}
      </h3>
      <h4 class="genre font-medium text-gray-500 mt-4 dark:text-gray-400">
        {{ getGenre }}
      </h4>
      <h4 class="release font-medium text-gray-500 mt-0.5 dark:text-gray-400">
        {{ getRelease }}
      </h4>
      <h3
        class="size text-xl font-medium mt-4 text-gray-600 dark:text-gray-400"
      >
        {{ getSize }}
      </h3>
      <div class="dw--btn mt-6">
        <DownloadButton
          :downloadDetails="getDownloadDetails"
          @onDownload="handleOnDownload"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DownloadButton from "@/components/DownloadButton";

export default {
  name: "DownloadResult",
  components: {
    DownloadButton
  },
  props: {
    metaDetails: {
      type: Object
    },
    downloadDetails: {
      type: Object
    }
  },
  methods: {
    handleOnDownload: function() {
      // Handle what to do when the song is downloaded once
      console.log("OnDownload");
      this.$parent.showDonate = true;
    }
  },
  computed: {
    getDownloadDetails() {
      return this.downloadDetails;
    },
    getCover() {
      // Check if the URL has something like 100x100, if it does, replace it with 480x480
      var coverUrl = this.metaDetails.cover;
      const fallback =
        "https://generative-placeholders.glitch.me/image?width=480&height=480&style=123&colors=74";
      return coverUrl == "" ? fallback : coverUrl.replace("100x100", "480x480");
    },
    getTitle() {
      return this.metaDetails.name;
    },
    getArtist() {
      return this.metaDetails.artist;
    },
    getGenre() {
      return this.metaDetails.genre;
    },
    getRelease() {
      var release = this.metaDetails.release_date;
      if (release.includes("T")) release = release.split("T")[0];

      // Now convert the date to look more readable
      return new Date(release).toLocaleString("en-US", { dateStyle: "medium" });
    },
    getSize() {
      return this.downloadDetails.size.readable;
    },
    getImageTitle() {
      return this.metaDetails.cover == ""
        ? "Just a placeholder"
        : this.getTitle;
    }
  }
};
</script>

<style lang="scss" scoped>
.download--result__container {
  .download--details {
    .artist,
    .genre,
    .release,
    .size {
      @extend .dm-sans;
    }

    .verified {
      background: lighten($darkgreen, 45);
      color: $darkgreen;
    }
  }
}
</style>
