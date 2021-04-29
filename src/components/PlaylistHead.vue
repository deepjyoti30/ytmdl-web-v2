<template>
  <div class="playlist--head__container my-12">
    <div class="flex">
      <div class="pl--cover">
        <img
          src="https://generative-placeholders.glitch.me/image?width=300&height=300&style=123&colors=74"
          loading="lazy"
          alt="Playlist Cover"
          class="rounded-md shadow-2xl"
        />
      </div>
      <div class="pl--details ml-12 my-3">
        <div class="pl--title text-4xl font-medium dm-sans">My Super Mix</div>
        <div class="pl--songs text-xl mt-6 text-gray-500 font-medium">
          254 songs
        </div>
        <div class="pl--details mt-3 text-gray-500 roboto max-w-md">
          Just a bit explaining about the cool playlist that I have made that
          does not have any resemblance to any other playlist whatsoever.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaylistHead"
};
</script>
