<template>
  <div class="song--result__container">
    <div class="song--result my-4 max-w-3xl mr-auto ml-auto p-2 flex">
      <div class="song--cover w-3/6">
        <img
          src="https://i.ytimg.com/vi/kv8zyBi4ZXk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBz7ghu6xqU2IgzFXp5BbGySHcvQg"
          alt=""
          class=""
          loading="lazy"
        />
      </div>
      <div class="song--details px-6 w-4/6">
        <div class="top--details flex justify-between items-center">
          <h3 class="text-3xl font-semibold title">Sundown</h3>
          <span class="verified--music py-1 px-2 rounded-sm">
            Verified Music
          </span>
        </div>
        <h5 class="duration text-lg mt-4 text-gray-700 font-medium">3:34</h5>
        <h5 class="channel text-lg text-gray-500">Gordon Lightfoot</h5>
        <h5 class="description text-md mt-2 text-gray-500">
          Provided to YouTube by Rhino/Warner Records
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongResult"
};
</script>

<style lang="scss" scoped>
.song--result__container {
  .song--result {
    .song--details {
      .channel,
      .duration,
      .verified--music {
        @extend .dm-sans;
      }

      .verified--music {
        background: lighten($darkgreen, 45);
        color: $darkgreen;
      }
    }
  }
}
</style>
