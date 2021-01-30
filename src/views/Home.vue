<template>
  <div class="home__container md:py-16 pt-32 pb-8">
    <div class="top__container text-center">
      <h1 class="md:text-4xl text-3xl font-bold">
        Download <span class="highlight">songs with metadata</span> in the best
        quality possible!
      </h1>
      <h4
        class="md:text-xl text-md md:px-0 px-6 mt-12 text-gray-500 font-medium"
      >
        Get a high quality song with metadata embedded into the file in just a
        few seconds.
      </h4>
    </div>
    <div class="start-btn-content pt-32">
      <div class="start--btn--wrapper text-center">
        <router-link
          to="/search"
          class="start--btn px-16 py-6 shadow-xl text-2xl font-medium rounded-lg"
          >Download a song</router-link
        >
      </div>
    </div>
    <Details />
  </div>
</template>

<script>
import Details from "@/components/Details";

export default {
  name: "Home",
  components: { Details }
};
</script>

<style lang="scss" scoped>
.home__container {
  .top__container {
    h1 {
      color: $darkblue;

      .highlight {
        border-bottom: 5px solid $lightblue;
        transform: translateZ(5px);
      }
    }

    h4 {
      @extend .dm-sans;
    }
  }

  .start-btn-content {
    .start--btn {
      @extend .dm-sans;
      $color: lighten($mediumblue, 5);

      background: $color;
      color: white;
      transition: 150ms ease;

      &:hover {
        transition: 150ms ease;
        background: darken($color, 2);
      }
    }
  }
}
</style>
