<template>
  <div
    class="playlist--post__container mb-12 backdrop-filter backdrop-blur-3xl bg-white dark:bg-darklow bg-opacity-95 dark:bg-opacity-95 rounded-t-md"
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
            class="py-2 px-6 bg-red-500 text-white rounded-md font-medium duration-150 ease-in hover:bg-red-600 inline-flex"
            :title="getButtonTitle"
          >
            Download Playlist
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
    return {
      isDisabled: false
    };
  },
  computed: {
    getButtonTitle() {
      return this.isDisabled
        ? "You cannot download more than 15 songs at a time"
        : "Download the selected songs";
    }
  }
};
</script>
