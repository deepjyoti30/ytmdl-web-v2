<template>
  <div class="playlist--song__container">
    <div
      class="pl--song--content flex items-center justify-between border-b py-2"
    >
      <div class="song--details flex items-center w-3/5">
        <div class="cover">
          <img
            src="https://generative-placeholders.glitch.me/image?width=50&height=50&style=123&colors=25"
            alt="Song Cover"
            class="w-10 h-10 rounded-md object-cover"
          />
        </div>
        <div class="title w-2/5">
          <div class="font-medium text-gray-800">{{ getTitle }}</div>
        </div>
        <div class="artist w-2/5">
          <div class="font-medium text-gray-400">{{ getArtist }}</div>
        </div>
      </div>
      <div class="link">
        <a
          :href="getUrl"
          class="px-2 py-2 bg-gray-100 text-red-600 rounded-full inline-flex duration-150 ease-in hover:bg-gray-200"
          title="Check on YouTube"
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
    }
  }
}
</style>
