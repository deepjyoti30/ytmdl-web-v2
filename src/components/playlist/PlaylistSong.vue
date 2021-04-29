<template>
  <div class="playlist--song__container w-3/4">
    <div class="pl--song--content flex items-center">
      <div class="cover">
        <img
          src="https://generative-placeholders.glitch.me/image?width=50&height=50&style=123&colors=25"
          alt="Song Cover"
          class="w-10 h-10 rounded-md object-cover"
        />
      </div>
      <div class="title w-1/5">
        <div class="font-medium text-gray-800">Sundown</div>
      </div>
      <div class="artist w-1/5"></div>
      <div class="link"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaylistSong"
};
</script>

<style lang="scss" scoped>
.playlist--song__container {
  .pl--song--content {
    div {
      @apply px-2;
    }
  }
}
</style>
