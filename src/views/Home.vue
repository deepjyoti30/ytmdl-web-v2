<template>
  <div class="home__container md:py-16 py-24">
    <div class="top__container text-center">
      <h1 class="md:text-4xl text-3xl font-bold">
        Download <span class="highlight">songs with metadata</span> in the best
        quality possible!
      </h1>
    </div>
    <div class="search-bar-content pt-16">
      <SearchBar />
    </div>
    <Details />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import Details from "@/components/Details";

export default {
  name: "Home",
  components: { SearchBar, Details }
};
</script>

<style lang="scss" scoped>
.home__container {
  .top__container {
    h1 {
      color: $lightgreen;

      .highlight {
        border-bottom: 5px solid $yellow;
        transform: translateZ(5px);
      }
    }
  }
}
</style>
