<template>
  <div class="playlist--head__container my-12">
    <div class="md:flex">
      <div class="pl--cover">
        <div
          class="img--wrapper relative shadow-2xl md:w-full w-3/4 mr-auto ml-auto"
        >
          <img
            :src="getPlaylistCover"
            loading="lazy"
            alt="Playlist Cover"
            class="rounded-md "
          />
          <div
            v-if="coverStatus == 'loading'"
            class="rounded-md h-full w-full loading--container top-0 left-0 absolute bg-black bg-opacity-40 flex items-center justify-center"
          >
            Loading..
          </div>
        </div>
      </div>
      <div
        class="pl--details md:ml-12 md:my-3 mb-3 mt-12 flex flex-col justify-between"
      >
        <div class="md:text-left text-center">
          <div
            class="pl--title md:text-4xl text-3xl text-gray-700 font-medium dm-sans dark:text-gray-200"
          >
            {{ getTitle }}
          </div>
          <div
            class="pl--uploader mt-2 text-lg text-gray-500 dark:text-gray-400 md:max-w-md"
          >
            Uploaded by
            <span class="font-medium text-gray-600 dark:text-gray-300">{{
              getUploader
            }}</span>
          </div>
          <div
            class="pl--songs text-xl md:mt-6 mt-3 text-gray-500 font-medium dark:text-gray-400"
          >
            <span
              class="text-gray-500 dark:text-gray-300 font-semibold md:text-4xl text-3xl"
              >{{ getSongCount }}</span
            >
            Songs
          </div>
        </div>
        <div class="pl--cta md:mt-0 mt-10 md:text-left text-center">
          <a
            :href="getPlaylistUrl"
            class="py-2 px-6 bg-red-500 text-white rounded-md font-medium duration-150 ease-in hover:bg-red-600 inline-flex"
            target="_blank"
            rel="noopener noreferrer"
            title="Preview the playlist on YouTube"
          >
            Preview
            <span class="external--icon ml-2 mt-1">
              <ExternalLinkIcon size="1x" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";
import playlist from "@/components/mixins/playlist";

export default {
  name: "PlaylistHead",
  components: {
    ExternalLinkIcon
  },
  data: function() {
    return {
      cover:
        "https://generative-placeholders.glitch.me/image?width=300&height=300&style=123&colors=74",
      coverStatus: "loading"
    };
  },
  mixins: [playlist],
  props: {
    playlistData: {
      type: Object,
      default: null
    },
    playlistCover: {
      type: Array,
      default: null
    }
  },
  computed: {
    getTitle() {
      return this.playlistData["title"];
    },
    getUploader() {
      return this.playlistData["uploader"];
    },
    getSongCount() {
      return this.playlistData["song_count"];
    },
    getPlaylistUrl() {
      return this.playlistData["url"];
    },
    getPlaylistCover() {
      return this.cover;
    }
  },
  watch: {
    playlistCover: function() {
      // Update the cover when the playlistCover is updated
      this.cover = this.buildPlaylistCover(this.playlistCover);

      // Set the status to ok
      this.coverStatus = "ok";
    }
  }
};
</script>

<style lang="scss" scoped></style>
