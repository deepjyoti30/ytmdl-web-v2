<template>
  <div class="home__container md:py-16 pt-32 pb-8">
    <div class="top__container text-center">
      <h1 class="md:text-5xl md:w-2/5 mr-auto ml-auto text-3xl font-bold">
        Download <span class="highlight">songs with metadata</span> in the best
        quality possible!
      </h1>
      <h4
        class="md:text-lg md:w-2/5 mr-auto ml-auto text-md md:px-0 px-6 mt-12 text-gray-500 font-medium"
      >
        We do all the work for you! We download the song, add metadata to it and
        make it available for download in just a matter of seconds. All you have
        to do is enjoy the song!
      </h4>
    </div>
    <div class="start-btn-content flex flex-wrap justify-center pt-32">
      <div class="start--btn--wrapper text-center md:mb-0 mb-14">
        <router-link
          to="/search"
          class="start--btn md:px-16 px-12 md:py-6 py-4 shadow-xl md:text-2xl text-xl font-medium rounded-lg md:mr-6"
          title="Click to download a song"
          >Download a song</router-link
        >
      </div>
      <div class="github--btn--wrapper text-center">
        <a
          href="https://github.com/deepjyoti30/ytmdl-web-v2"
          target="_blank"
          class="github--btn md:px-16 px-12 md:py-5 py-3 md:text-2xl text-xl font-medium rounded-lg"
          >Check Source</a
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

      line-height: 1.3em;
    }

    h4 {
      @extend .dm-sans;
    }
  }

  .start-btn-content {
    @extend .dm-sans;
    $color: lighten($mediumblue, 5);
    @apply capitalize;

    .start--btn {
      background: $color;
      color: white;
      transition: 150ms ease;

      &:hover {
        transition: 150ms ease;
        background: darken($color, 2);
      }
    }

    .github--btn {
      border: 4px solid $color;
      transition: 150ms ease;
      color: $color;
    }
  }
}
</style>
