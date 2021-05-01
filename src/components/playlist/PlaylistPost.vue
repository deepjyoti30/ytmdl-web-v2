<template>
  <div
    class="playlist--post__container mb-12 backdrop-filter backdrop-blur-3xl bg-white bg-opacity-95 rounded-t-md"
  >
    <div class="py-6">
      <div class="flex justify-between">
        <div class="time--details flex w-1/4 pl-2">
          <div class="icon">
            <ClockIcon />
          </div>
          <div class="text ml-4">
            <div class="sub--text text-gray-600">Should be done in</div>
            <div class="time--text text-lg font-semibold text-gray-800">
              15 mins
            </div>
          </div>
        </div>
        <div class="btn--content">
          <button
            type="button"
            class="py-2 px-6 bg-red-500 text-white rounded-md font-medium duration-150 ease-in hover:bg-red-600 inline-flex"
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
  }
};
</script>
