<template>
  <div
    class="playlist--post__container mb-12 backdrop-filter backdrop-blur-3xl bg-white bg-opacity-95 rounded-t-md"
  >
    <div class="p-6">
      <div class="flex justify-between">
        <div class="time--details flex w-1/4">
          <div class="icon mr-4">
            <ClockIcon />
          </div>
          <div class="text ">
            <div class="sub--text text-gray-600">Should be done in</div>
            <div class="time--text text-lg font-semibold text-gray-800">
              15 mins
            </div>
          </div>
        </div>
        <button>Nana</button>
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
