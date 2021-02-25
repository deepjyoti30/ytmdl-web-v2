<template>
  <div class="home__container md:py-16 pt-32 pb-8">
    <div class="top__container text-center">
      <h1 class="md:text-5xl md:w-2/5 mr-auto ml-auto text-3xl font-semibold">
        Download
        <span class="highlight border-darkgreen-300">songs with metadata</span>
        in the best quality possible!
      </h1>
      <h4
        class="md:text-lg md:w-2/5 mr-auto ml-auto text-md md:px-0 px-6 mt-12 text-gray-500 dark:text-gray-400 font-medium"
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
          class="start--btn md:px-16 px-12 md:py-6 py-4 shadow-xl md:text-2xl text-xl font-medium rounded-lg md:mr-6 bg-darkgreen-300 hover:bg-darkgreen-200"
          title="Click to download a song"
          >Download a song</router-link
        >
      </div>
      <div class="github--btn--wrapper text-center">
        <a
          title="Check Source Code"
          href="https://github.com/deepjyoti30/ytmdl-web-v2"
          target="_blank"
          rel="noopener"
          class="github--btn md:px-16 px-12 md:py-5 py-3 md:text-2xl text-xl font-medium rounded-lg border-darkgreen-300"
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
        border-bottom-width: 5px;
        border-style: solid;
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
      transition: 150ms ease;

      &:hover {
        transition: 150ms ease;
      }
    }

    .github--btn {
      border-width: 4px;
      border-style: solid;
      transition: 150ms ease;
    }
  }
}
</style>
