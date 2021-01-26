<template>
  <div class="home__container py-16">
    <div class="top__container text-center">
      <h1 class="text-4xl font-bold">
        Download songs with metadata in the best quality possible!
      </h1>
      <p class="my-8 text-gray-600 dark:text-gray-300">
        Ytmdl lets you download songs with metadata embedded from sources like
        Itunes, LastFM etc in the highest quality possible.
      </p>
    </div>
    <div class="search-bar-content">
      <SearchBar />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";

export default {
  name: "Home",
  components: { SearchBar }
};
</script>

<style lang="scss" scoped>
.home__container {
  .top__container {
    h1 {
      color: $lightgreen;
    }
  }
}
</style>
