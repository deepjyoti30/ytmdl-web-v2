<template>
  <div class="playlist--song__container">
    <div
      class="pl--song--content flex items-center justify-between border-b dark:border-gray-700 py-2"
    >
      <div class="song--details flex items-center md:w-3/5 w-full">
        <div class="cover w-1/6">
          <img
            src="https://generative-placeholders.glitch.me/image?width=50&height=50&style=123&colors=25"
            alt="Song Cover"
            class="w-10 h-10 rounded-md object-cover"
          />
        </div>
        <div class="title md:w-2/5 w-5/6">
          <div class="font-medium text-gray-800 dark:text-gray-300">
            {{ getTitle }}
          </div>
        </div>
        <div class="artist w-2/5 md:block hidden">
          <div class="font-medium text-gray-400">{{ getArtist }}</div>
        </div>
      </div>
      <div class="link">
        <a
          :href="getUrl"
          class="px-2 py-2 bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 rounded-full inline-flex duration-150 ease-in hover:bg-gray-200 dark:hover:bg-gray-700"
          title="Check on YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLinkIcon size="1x" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";

export default {
  name: "PlaylistSong",
  components: {
    ExternalLinkIcon
  },
  props: {
    song: {
      type: Object,
      default: null
    }
  },
  methods: {
    splitToLen: function(value, maxLen = 17) {
      /**
       * Split the passed string to length.
       *
       * If the string is less than the length than
       * return the string itself. Else split and add
       * some dots.
       */
      return value.length > maxLen ? value.slice(0, maxLen - 2) + ".." : value;
    }
  },
  computed: {
    getTitle() {
      return this.splitToLen(this.song["title"]);
    },
    getArtist() {
      return this.splitToLen(this.song["uploader"], 20);
    },
    getUrl() {
      return this.song["url"];
    }
  }
};
</script>

<style lang="scss" scoped>
.playlist--song__container {
  .pl--song--content {
    .song--details {
      div {
        @apply px-2;

        &:first-child {
          @apply pl-0;
        }
      }
    }
  }
}
</style>
