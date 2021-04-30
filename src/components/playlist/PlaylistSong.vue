<template>
  <div class="playlist--song__container">
    <div
      class="pl--song--content flex items-center justify-between border-b dark:border-gray-700 py-2"
    >
      <div class="song--details flex items-center md:w-3/5 w-11/12">
        <div class="cover md:w-auto w-1/6">
          <img
            src="https://generative-placeholders.glitch.me/image?width=50&height=50&style=123&colors=25"
            alt="Song Cover"
            class="w-10 h-10 rounded-md object-cover"
          />
        </div>
        <div class="title md:w-3/5 w-5/6">
          <div class="font-medium text-gray-800 dark:text-gray-300">
            {{ getTitle }}
          </div>
        </div>
        <div class="artist md:block hidden">
          <div class="font-medium text-gray-400">{{ getArtist }}</div>
        </div>
      </div>
      <div class="link md:w-auto w-1/12">
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
  methods: {},
  computed: {
    getTitle() {
      return this.song["title"];
    },
    getArtist() {
      return this.song["uploader"];
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

      .title,
      .artist {
        div {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
