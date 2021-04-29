<template>
  <div class="playlist--song__container w-3/4">
    <div class="pl--song--content flex">
      <div class="cover">
        <img
          src="https://generative-placeholders.glitch.me/image?width=300&height=300&style=123&colors=73"
          alt="Song Cover"
          class="w-5 h-5 rounded-md"
        />
      </div>
      <div class="title"></div>
      <div class="artist"></div>
      <div class="link"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaylistSong"
};
</script>
