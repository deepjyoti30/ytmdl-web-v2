<template>
  <div
    class="playlist--post__container mb-12 backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-white dark:bg-darklow bg-opacity-40 dark:bg-opacity-40 rounded-t-md"
  >
    <div class="md:py-6 py-4 px-2">
      <div class="flex md:justify-between justify-center">
        <div class="time--details md:flex hidden w-1/4">
          <div class="icon dark:text-white">
            <ClockIcon />
          </div>
          <div class="text ml-4">
            <div class="sub--text text-gray-600 dark:text-gray-500">
              Should be done in
            </div>
            <div
              class="time--text text-lg font-semibold text-gray-800 dark:text-gray-300"
            >
              15 mins
            </div>
          </div>
        </div>
        <div class="btn--content">
          <button
            type="button"
            class="py-2 px-6 bg-red-500 text-white rounded-md font-medium duration-150 ease-in hover:bg-red-600 inline-flex disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-500"
            :title="getButtonTitle"
            :disabled="getIsBtnDisabled"
          >
            Download Playlist
            <span v-if="songCount" class="selected--songs ml-1">
              ({{ songCount }})</span
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ClockIcon } from "vue-feather-icons";

export default {
  name: "PlaylistPost",
  components: {
    ClockIcon
  },
  data: function() {
    return {};
  },
  props: {
    selectedSongCount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getButtonTitle() {
      return this.getIsBtnDisabled
        ? "You cannot download more than 15 songs at a time"
        : "Download the selected songs";
    },
    songCount() {
      return this.selectedSongCount;
    },
    getIsBtnDisabled() {
      return this.selectedSongCount > 15;
    }
  }
};
</script>
