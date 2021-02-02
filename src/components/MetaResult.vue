<template>
  <div class="meta--result__container">
    <router-link :to="getLink">
      <div class="meta--result md:my-4 my-3 max-w-3xl mr-auto ml-auto p-2 flex">
        <div class="meta--cover w-1/4">
          <img :src="getCover" alt="" class="rounded-md" loading="lazy" />
        </div>
        <div class="meta--details w-3/4 md:px-8 pl-3 py-2">
          <h3
            class="text-3xl font-semibold title text-gray-600 dark:text-gray-200"
          >
            {{ getTitle }}
          </h3>
          <h4 class="artist mt-3 text-xl text-gray-600 dark:text-gray-400">
            {{ getArtist }}
          </h4>
          <h5 class="duration text-gray-700 dark:text-gray-400">
            {{ getDuration }}
          </h5>
          <h5 class="album mt-3 text-md text-gray-500">{{ getAlbum }}</h5>
          <h5 class="release text-md text-gray-500">{{ getRelease }}</h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MetaResult",
  props: {
    meta: {
      type: Object
    },
    askFormatEach: {
      type: Boolean
    }
  },
  methods: {
    millisToMinutesAndSeconds: function(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
    generateLink: function() {
      /**
       * Generate the link where the user is supposed to be forwarded to.
       *
       * If the user has set the asking format everytime to disabled, we need
       * to forward to the download page directly.
       */
      const linkDetails = {
        name: "Format",
        params: {
          metaDetails: this.meta
        },
        query: {
          videoId: this.$route.query.videoId
        }
      };

      if (!this.askFormatEach) {
        linkDetails.name = "Download";
      }

      return linkDetails;
    }
  },
  computed: {
    getTitle() {
      return this.meta.name;
    },
    getArtist() {
      return this.meta.artist;
    },
    getAlbum() {
      return this.meta.album;
    },
    getDuration() {
      return this.millisToMinutesAndSeconds(this.meta.time);
    },
    getRelease() {
      var release = this.meta.release_date;
      if (release.includes("T")) release = release.split("T")[0];

      // Now convert the date to look more readable
      return new Date(release).toLocaleString("en-US", { dateStyle: "medium" });
    },
    getCover() {
      // Check if the URL has something like 100x100, if it does, replace it with 480x480
      var coverUrl = this.meta.cover;
      return coverUrl.replace("100x100", "480x480");
    },
    getLink() {
      return this.generateLink();
    }
  }
};
</script>

<style lang="scss" scoped>
.meta--result__container {
  .meta--result {
    .meta--cover {
      img {
        @media only screen and (min-width: $md) {
          min-width: 12rem;
        }

        @media only screen and (max-width: $md) {
          min-height: 100%;
        }
      }
    }

    .meta--details {
      .artist,
      .album,
      .release,
      .duration {
        @extend .dm-sans;
      }

      .album,
      .title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .title {
        -webkit-line-clamp: 1;
      }
    }
  }
}
</style>
